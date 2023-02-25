import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";

export async function load({ fetch, params }) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=9b018d1e&i=${params.imdbID}`);
    const movie = await res.json()  
    

    return { movie }
}

export const actions = {
    createMovie: async({ request }) => {
        const myRequest = Object.fromEntries(await request.formData());
        console.log(myRequest);
        const { title, plot, genre, director, imdb, rotten, meta} = myRequest;
        
        try {
            await prisma.movie.create({
                data: {
                    title,
                    plot,
                    genre,
                    director,
                    imdb,
                    rotten,
                    meta,
                    personal: "",
                    comment: "",
                    tags: ""
                }
            }) 
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Could not add movie to database"})
        }

        return { status: 201 }
    }

};