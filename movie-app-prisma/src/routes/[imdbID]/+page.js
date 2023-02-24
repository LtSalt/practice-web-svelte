export async function load({ fetch, params }) {
    console.log(params)
    console.log(params.imdbID)
    const res = await fetch(`http://www.omdbapi.com/?apikey=9b018d1e&i=${params.imdbID}`);
    const movie = await res.json()  

    return { movie }
}