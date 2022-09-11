// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { protectedExampleRouter } from "./protected-example-router";
import { productsRouter } from "./products";
import { materialsRouter } from "./materials";
import { bomsRouter } from "./boms";
import { suppliersRouter } from "./suppliers";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("products.", productsRouter)
  .merge("materials.", materialsRouter)
  .merge("boms.", bomsRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("suppliers.", suppliersRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
