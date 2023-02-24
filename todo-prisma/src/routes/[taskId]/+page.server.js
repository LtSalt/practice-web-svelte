import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

    const getTask = async() => {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(params.taskId)
            }
        })
        if (!task) {
            throw error(404, "Task not found")
        }
        return task
    }

    return {
        task: getTask()
    }
}

export const actions = {
    updateTask: async({ request, params}) => {
        const { title, content } = Object.fromEntries(await request.formData())

        try {
            await prisma.task.update ({
                where: {
                    id: Number(params.taskId)
                },
                data: {
                    title,
                    content
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Could not edit task"})
        }

        return {
            status: 200
        }
    }
};