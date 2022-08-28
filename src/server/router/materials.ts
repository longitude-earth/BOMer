import { createRouter } from "./context";
import {  z } from "zod";
import { prisma } from "../db/client"

export const materialsRouter = createRouter()
  .query("getAll", {
    async resolve({ctx}) {
      return prisma.material.findMany()
    },
  })
  .query("get", {
    input: z.object({id: z.number()}),
    async resolve({ctx, input}) {
      return ctx.prisma.material.findUnique({
        where: {
          id: input.id
        }
      });
    },
  });
