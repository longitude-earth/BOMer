import { createRouter } from "./context";
import {  z } from "zod";

export const bomsRouter = createRouter()
  .query("getAll", {
    async resolve({ctx}) {
      return ctx.prisma.bom.findMany()
    },
  })
  .query("get", {
    input: z.object({id: z.number()}),
    async resolve({ctx, input}) {
      return ctx.prisma.bom.findUnique({
        where: {
          id: input.id
        },
        include: {
          rootProduct: true,
          BomEntry: {
            include: {
              Material: true
            }
          }
        }
      });
    },
  });
