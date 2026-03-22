import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import type {
  BookingRequestDTO,
  BookingResponseDTO,
  CancelBookingParams,
  ErrorDTO,
} from "../../models";

import { customInstance } from "../../client";

/**
 * @summary Create a new booking
 */
export const createBooking = (
  bookingRequestDTO: BookingRequestDTO,
  signal?: AbortSignal,
) => {
  return customInstance<BookingResponseDTO>({
    url: `/api/booking`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: bookingRequestDTO,
    signal,
  });
};

export const getCreateBookingMutationOptions = <
  TError = ErrorDTO,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createBooking>>,
    TError,
    { data: BookingRequestDTO },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createBooking>>,
  TError,
  { data: BookingRequestDTO },
  TContext
> => {
  const mutationKey = ["createBooking"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createBooking>>,
    { data: BookingRequestDTO }
  > = (props) => {
    const { data } = props ?? {};

    return createBooking(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateBookingMutationResult = NonNullable<
  Awaited<ReturnType<typeof createBooking>>
>;
export type CreateBookingMutationBody = BookingRequestDTO;
export type CreateBookingMutationError = ErrorDTO;

/**
 * @summary Create a new booking
 */
export const useCreateBooking = <TError = ErrorDTO, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createBooking>>,
      TError,
      { data: BookingRequestDTO },
      TContext
    >;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof createBooking>>,
  TError,
  { data: BookingRequestDTO },
  TContext
> => {
  const mutationOptions = getCreateBookingMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get booking details and status
 */
export const getBooking = (bookingId: string, signal?: AbortSignal) => {
  return customInstance<BookingResponseDTO>({
    url: `/api/booking/${bookingId}`,
    method: "GET",
    signal,
  });
};

export const getGetBookingQueryKey = (bookingId?: string) => {
  return [`/api/booking/${bookingId}`] as const;
};

export const getGetBookingQueryOptions = <
  TData = Awaited<ReturnType<typeof getBooking>>,
  TError = ErrorDTO,
>(
  bookingId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getBooking>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBookingQueryKey(bookingId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getBooking>>> = ({
    signal,
  }) => getBooking(bookingId, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!bookingId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getBooking>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetBookingQueryResult = NonNullable<
  Awaited<ReturnType<typeof getBooking>>
>;
export type GetBookingQueryError = ErrorDTO;

export function useGetBooking<
  TData = Awaited<ReturnType<typeof getBooking>>,
  TError = ErrorDTO,
>(
  bookingId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getBooking>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getBooking>>,
          TError,
          Awaited<ReturnType<typeof getBooking>>
        >,
        "initialData"
      >;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetBooking<
  TData = Awaited<ReturnType<typeof getBooking>>,
  TError = ErrorDTO,
>(
  bookingId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getBooking>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getBooking>>,
          TError,
          Awaited<ReturnType<typeof getBooking>>
        >,
        "initialData"
      >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetBooking<
  TData = Awaited<ReturnType<typeof getBooking>>,
  TError = ErrorDTO,
>(
  bookingId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getBooking>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Get booking details and status
 */

export function useGetBooking<
  TData = Awaited<ReturnType<typeof getBooking>>,
  TError = ErrorDTO,
>(
  bookingId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getBooking>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetBookingQueryOptions(bookingId, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Cancel a booking
 */
export const cancelBooking = (
  bookingId: string,
  params: CancelBookingParams,
  signal?: AbortSignal,
) => {
  return customInstance<BookingResponseDTO>({
    url: `/api/booking/${bookingId}/cancel`,
    method: "POST",
    params,
    signal,
  });
};

export const getCancelBookingMutationOptions = <
  TError = ErrorDTO,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof cancelBooking>>,
    TError,
    { bookingId: string; params: CancelBookingParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof cancelBooking>>,
  TError,
  { bookingId: string; params: CancelBookingParams },
  TContext
> => {
  const mutationKey = ["cancelBooking"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof cancelBooking>>,
    { bookingId: string; params: CancelBookingParams }
  > = (props) => {
    const { bookingId, params } = props ?? {};

    return cancelBooking(bookingId, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type CancelBookingMutationResult = NonNullable<
  Awaited<ReturnType<typeof cancelBooking>>
>;

export type CancelBookingMutationError = ErrorDTO;

/**
 * @summary Cancel a booking
 */
export const useCancelBooking = <TError = ErrorDTO, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof cancelBooking>>,
      TError,
      { bookingId: string; params: CancelBookingParams },
      TContext
    >;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof cancelBooking>>,
  TError,
  { bookingId: string; params: CancelBookingParams },
  TContext
> => {
  const mutationOptions = getCancelBookingMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
