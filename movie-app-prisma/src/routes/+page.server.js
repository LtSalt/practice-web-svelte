import { prisma } from "$lib/server/prisma";

export async function load() {
    return {
        movies: await prisma.movie.findMany()
    }
}