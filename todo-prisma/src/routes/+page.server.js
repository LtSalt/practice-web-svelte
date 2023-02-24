/** @type {import('./$types').Actions} */
import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";

export const load = async() => {
    return {
        tasks: await prisma.task.findMany()
    }
}

export const actions = {
    createTask: async({ request }) => {
        const { title, content } = Object.fromEntries(await request.formData())
        
        try {
            await prisma.task.create({
                data: {
                    title,
                    content
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Could not create the task."})
        }

        return {
            status: 201
        }
    },
    deleteTask: async({ url }) => {
        const id = url.searchParams.get("id")
        if (!id) {
            return(fail(400, { message: "Invalid request"}))
        }

        try{
            await prisma.task.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Couldn't delete the task"})
        }

        return {
            status: 200
        }
    }
};