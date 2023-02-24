// TODO
// put API key in separate file

// export async function load({ fetch, params }) {
//     const res = await fetch(`http://www.omdbapi.com/?apikey=9b018d1e&s=*${params}*`);

//     const data = await res.json();

//     return { data }
// }

export const actions = {
    searchOMDB: async({ request }) => {

        const formData = await request.formData()

        return formData
        // try{
            
        // }
    }
};