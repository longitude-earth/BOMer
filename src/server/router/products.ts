import { createRouter } from "./context";
import {  z } from "zod";

export const productsRouter = createRouter()
  .query("getAll", {
    async resolve({ctx}) {
      return ctx.prisma.product.findMany({

      });
    },
  })
  .query("get", {
    input: z.object({id: z.number()}),
    async resolve({ctx, input}) {
      return ctx.prisma.product.findUnique({
        where: {
          id: input.id
        },
        include: {
          Bom: {
            include : {
              rootProduct: true
            }
          },
        }
      });
    },
  });
