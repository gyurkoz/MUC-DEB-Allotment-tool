import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 3,
      refetchOnWindowFocus: import.meta.env.PROD,
      refetchOnMount: "always",
    },
    mutations: {
      retry: false,
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});
