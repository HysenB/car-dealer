import { PrismaClient } from "@prisma/client";

const globalFormPrisma = global as unknown as { prisma: PrismaClient }
function makeClient() {
    return new PrismaClient({ log: ['error', 'info', 'warn'] })

}

export const prisma = globalFormPrisma.prisma || makeClient();
if (process.env.NODE_ENV !== 'production') globalFormPrisma.prisma = prisma;