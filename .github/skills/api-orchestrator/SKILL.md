---
name: api-orchestrator
description: Enterprise-grade API management using Orval for TanStack Query v5 hook generation and Zod schema synchronization from OpenAPI specs.
---

# API Orchestrator Technical Specification

## Core Integration Stack

- **Generator:** Orval (@latest)
- **Data Fetching:** TanStack Query v5 (@tanstack/react-query)
- **Validation:** Zod (Auto-generated schemas for Requests/Responses)
- **HTTP Client:** Axios (Custom instance with Lufthansa/Netline auth interceptors)

## Orchestration Workflow

1. **Source of Truth:** All API interactions must originate from `swagger.yaml`.
   Manual `fetch` or `axios` calls for backend data are prohibited.
2. **Hook Generation:** Use `mode: 'tags-split'` in `orval.config.ts` to maintain
   a modular API structure.
3. **Zod Integration:** Leverage Orval's `zod: true` to generate validation schemas.
   These schemas MUST be reused in the `form-orchestrator` for field-level and
   form-level validation.

## Query Invalidation & Cache Management

- Use generated query keys from Orval for precise cache manipulation.
- **Pattern:** After a successful mutation, always invalidate related queries:

```typescript
const queryClient = useQueryClient();
const mutation = useCreateBooking({
  mutation: {
    onSuccess: () => {
      // Use the auto-generated key getter from Orval
      queryClient.invalidateQueries({ queryKey: getGetBookingsQueryKey() });
    },
  },
});
```

## Example: Complete Setup

```typescript
import { useQueryClient } from '@tanstack/react-query';
import { useCreateBooking, getGetBookingsQueryKey } from './api/generated/bookings';

const queryClient = useQueryClient();
const { mutate } = useCreateBooking({
  mutation: {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getGetBookingsQueryKey(),
      });
    },
  },
});
```

## Error Handling Patterns

### Query Error Handling

```typescript
import { useGetBooking } from './api/generated/bookings';
import { Alert, CircularProgress } from '@lsy-netline/netline-ui';

function BookingDetails({ bookingId }: { bookingId: string }) {
  const { data, error, isLoading } = useGetBooking(bookingId);

  if (isLoading) return <CircularProgress />;
  if (error) {
    return (
      <Alert severity="error">
        Failed to load booking: {error.message}
      </Alert>
    );
  }
  if (!data) return <Alert severity="warning">Booking not found</Alert>;

  return <div>{/* Render booking */}</div>;
}
```

### Mutation Error Handling

```typescript
import { useCreateBooking } from './api/generated/bookings';
import { Alert, Button } from '@lsy-netline/netline-ui';
import { useSnackbar } from '@lsy-netline/netline-ui-toasts';

function CreateBookingForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isPending, error } = useCreateBooking({
    mutation: {
      onSuccess: () => {
        enqueueSnackbar('Booking created successfully', { variant: 'success' });
      },
      onError: (error) => {
        enqueueSnackbar(`Failed: ${error.message}`, { variant: 'error' });
      },
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutate({ data: formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Booking'}
      </Button>
    </form>
  );
}
```

## Optimistic Updates (React 19)

```typescript
import { useOptimistic } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  useUpdateBooking,
  useGetBookings,
  getGetBookingsQueryKey
} from './api/generated/bookings';
import type { Booking } from './api/generated/models';
import { List } from '@lsy-netline/netline-ui';

interface BookingItemProps {
  booking: Booking;
  onUpdate: (booking: Booking) => void;
}

function BookingItem({ booking, onUpdate }: BookingItemProps) {
  return <div onClick={() => onUpdate(booking)}>{booking.id}</div>;
}

function BookingList() {
  const queryClient = useQueryClient();
  const { data: bookings = [] } = useGetBookings();
  const [optimisticBookings, setOptimisticBooking] = useOptimistic(
    bookings,
    (state, updatedBooking: Booking) =>
      state.map(b => b.id === updatedBooking.id ? updatedBooking : b)
  );

  const { mutate: updateBooking } = useUpdateBooking({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetBookingsQueryKey() });
      },
    },
  });

  const handleUpdate = async (booking: Booking) => {
    // Show optimistic update immediately
    setOptimisticBooking(booking);
    // Then perform actual update
    updateBooking({ id: booking.id, data: booking });
  };

  return (
    <List>
      {optimisticBookings.map(booking => (
        <BookingItem
          key={booking.id}
          booking={booking}
          onUpdate={handleUpdate}
        />
      ))}
    </List>
  );
}
```

## Pagination Pattern

```typescript
import { useGetBookings } from './api/generated/bookings';
import { DataGrid } from '@lsy-netline/netline-ui-data-grid';
import type { GridColDef } from '@lsy-netline/netline-ui-data-grid';
import { useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
];

function PaginatedBookings() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25,
  });

  const { data, isLoading } = useGetBookings({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
  });

  return (
    <DataGrid
      rows={data?.items || []}
      columns={columns}
      rowCount={data?.total || 0}
      loading={isLoading}
      paginationMode="server"
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      pageSizeOptions={[10, 25, 50, 100]}
    />
  );
}
```

## Infinite Scroll Pattern

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';
import { getGetBookingsQueryKey, getGetBookings } from './api/generated/bookings';
import { CircularProgress } from '@lsy-netline/netline-ui';
import { useEffect, useRef } from 'react';

interface BookingCardProps {
  booking: { id: string; name: string };
}

function BookingCard({ booking }: BookingCardProps) {
  return <div>{booking.name}</div>;
}

function InfiniteBookingList() {
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: getGetBookingsQueryKey(),
    queryFn: ({ pageParam = 0 }) =>
      getGetBookings({ page: pageParam, pageSize: 20 }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length : undefined,
    initialPageParam: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.items.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ))}
      <div ref={observerTarget} />
      {isFetchingNextPage && <CircularProgress />}
    </div>
  );
}
```

## Authentication & Interceptors

```typescript
// Custom Axios instance with auth interceptors
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
});

// Request interceptor - add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - handle 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default apiClient;
```

## Guidelines

1. **Always use Orval-generated hooks** - Never write manual fetch/axios calls
2. **Leverage Zod schemas** - Reuse in form validation (see `form-orchestrator`)
3. **Handle errors gracefully** - Show user-friendly messages
4. **Invalidate queries after mutations** - Keep UI in sync with server
5. **Use optimistic updates** - For better UX (React 19 `useOptimistic`)
6. **Implement pagination** - For large datasets
7. **Add loading states** - Always show feedback during async operations

## Related Skills

- `form-orchestrator` - Use Orval-generated Zod schemas for form validation
- `react-19` - React 19 patterns (useOptimistic, use hook)
- `netline-ui-v8` - UI components for error states, loading, data display
- `webapp-testing` - Testing API integration with mocked responses
