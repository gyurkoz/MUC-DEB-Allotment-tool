import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "../openapi.yml",
    },
    output: {
      mode: "tags-split",
      target: "./src/api/generated",
      schemas: "./src/api/models",
      client: "react-query",
      mock: false,
      clean: true,
      prettier: true,
      override: {
        mutator: {
          path: "./src/api/client.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useMutation: true,
          useInfiniteQuery: false,
          signal: true,
          version: 5,
        },
        zod: {
          generate: {
            body: true,
            param: true,
            query: true,
            response: true,
          },
        },
        header: false,
      },
    },
  },
});
