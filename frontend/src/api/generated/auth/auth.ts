import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryClient,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import type { ErrorDTO, LoginRequestDTO, LoginResponseDTO } from "../../models";

import { customInstance } from "../../client";

/**
 * @summary Authenticate user
 */
export const login = (
  loginRequestDTO: LoginRequestDTO,
  signal?: AbortSignal,
) => {
  return customInstance<LoginResponseDTO>({
    url: `/api/login`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: loginRequestDTO,
    signal,
  });
};

export const getLoginMutationOptions = <
  TError = ErrorDTO,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof login>>,
    TError,
    { data: LoginRequestDTO },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: LoginRequestDTO },
  TContext
> => {
  const mutationKey = ["login"];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof login>>,
    { data: LoginRequestDTO }
  > = (props) => {
    const { data } = props ?? {};

    return login(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type LoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof login>>
>;
export type LoginMutationBody = LoginRequestDTO;
export type LoginMutationError = ErrorDTO;

/**
 * @summary Authenticate user
 */
export const useLogin = <TError = ErrorDTO, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof login>>,
      TError,
      { data: LoginRequestDTO },
      TContext
    >;
  },
  queryClient?: QueryClient,
): UseMutationResult<
  Awaited<ReturnType<typeof login>>,
  TError,
  { data: LoginRequestDTO },
  TContext
> => {
  const mutationOptions = getLoginMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
