import prisma from "../prisma_client/prisma";

export async function getTagList() {
    return await prisma.tags.findMany();
}