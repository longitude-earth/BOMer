import { createRouter } from "./context";
import {  z } from "zod";

export const salesRouter = createRouter()
  .query("getAll", {
    async resolve({ctx}) {
      return ctx.prisma.salesOrder.findMany({
        include: {
          SalesOrderLine: true,
          Integration: true
        }
      });
    },
  })
  .query("get", {
    input: z.object({id: z.number()}),
    async resolve({ctx, input}) {
      return ctx.prisma.salesOrder.findUnique({
        where: {
          id: input.id
        },
        include: {
          SalesOrderLine: true,
          Integration: true
        }
      });
    },
  });
