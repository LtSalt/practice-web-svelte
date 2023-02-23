/** @type {import('./$types').Actions} */
import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";

// /** @type {import('./$types').PageLoad} */
// export async function load() {
//     return {
//         tasks: await prisma.task.findMany()
//     }
// };

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
    }

};