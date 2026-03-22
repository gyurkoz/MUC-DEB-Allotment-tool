import { useQuery } from "@tanstack/react-query";
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import type { ErrorDTO, FlightDTO, GetFlightsParams } from "../../models";

import { customInstance } from "../../client";

/**
 * @summary Get available flights
 */
export const getFlights = (params: GetFlightsParams, signal?: AbortSignal) => {
  return customInstance<FlightDTO[]>({
    url: `/api/flights`,
    method: "GET",
    params,
    signal,
  });
};

export const getGetFlightsQueryKey = (params?: GetFlightsParams) => {
  return [`/api/flights`, ...(params ? [params] : [])] as const;
};

export const getGetFlightsQueryOptions = <
  TData = Awaited<ReturnType<typeof getFlights>>,
  TError = ErrorDTO,
>(
  params: GetFlightsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getFlights>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetFlightsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFlights>>> = ({
    signal,
  }) => getFlights(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFlights>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetFlightsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getFlights>>
>;
export type GetFlightsQueryError = ErrorDTO;

export function useGetFlights<
  TData = Awaited<ReturnType<typeof getFlights>>,
  TError = ErrorDTO,
>(
  params: GetFlightsParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getFlights>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFlights>>,
          TError,
          Awaited<ReturnType<typeof getFlights>>
        >,
        "initialData"
      >;
  },
  queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFlights<
  TData = Awaited<ReturnType<typeof getFlights>>,
  TError = ErrorDTO,
>(
  params: GetFlightsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getFlights>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFlights>>,
          TError,
          Awaited<ReturnType<typeof getFlights>>
        >,
        "initialData"
      >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFlights<
  TData = Awaited<ReturnType<typeof getFlights>>,
  TError = ErrorDTO,
>(
  params: GetFlightsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getFlights>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Get available flights
 */

export function useGetFlights<
  TData = Awaited<ReturnType<typeof getFlights>>,
  TError = ErrorDTO,
>(
  params: GetFlightsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getFlights>>, TError, TData>
    >;
  },
  queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetFlightsQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}
