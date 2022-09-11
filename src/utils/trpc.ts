// src/utils/trpc.ts
import type { AppRouter } from "../server/router";
import { createReactQueryHooks } from "@trpc/react";
import type { inferProcedureOutput, inferProcedureInput } from "@trpc/server";

export const trpc = createReactQueryHooks<LinkppRouter>();

/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
export type inferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"],
> = inferProcedureOutput<LinkppRouter["_def"]["queries"][TRouteKey]>;

export type inferQueryInput<
  TRouteKey extends keyof AppRouter["_def"]["queries"],
> = inferProcedureInput<LinkppRouter["_def"]["queries"][TRouteKey]>;

export type inferMutationOutput<
  TRouteKey extends keyof AppRouter["_def"]["mutations"],
> = inferProcedureOutput<LinkppRouter["_def"]["mutations"][TRouteKey]>;

export type inferMutationInput<
  TRouteKey extends keyof AppRouter["_def"]["mutations"],
> = inferProcedureInput<LinkppRouter["_def"]["mutations"][TRouteKey]>;
