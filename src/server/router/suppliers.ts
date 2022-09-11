import { createRouter } from "./context";
import {  z } from "zod";

export const suppliersRouter = createRouter()
  .query("getAll", {
    async resolve({ctx}) {
      return ctx.prisma.supplier.findMany({
      });
    },
  })
  .query("get", {
    input: z.object({id: z.number()}),
    async resolve({ctx, input}) {
      return ctx.prisma.supplier.findUnique({
        where: {
          id: input.id
        }
      });
    },
  });
