<script>
    export let data;

    $: ({ movie } = data) 
    $: console.log(movie)
</script>

<div id="movie" class="element">
    <img id="movie-poster" src={movie.Poster} alt="Poster for the {movie.Type} {movie.Title}">
    <div id="description">
        <h1 id="title">{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <div id="specs">
            <span>{movie.Year}</span>
            <span>|</span>
            <span>{movie.Runtime}</span>
        </div>
        <div id="ratings">
            <div class="ratings">
                <h2>IMDb</h2>
                <p>{movie.Ratings[0].Value}</p>
            </div>
            <div class="ratings">
                <h2>RT</h2>
                <p>{movie.Ratings[1].Value}</p>
            </div>
            <div class="ratings">
                <h2>MC</h2>
                <p>{movie.Ratings[2].Value}</p>
            </div>
        </div>
    </div>
</div>

<style>
    #movie {
        width: clamp(350px, 90%, 1200px);
        margin: 40px auto;
        padding: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px
    }
    #title {
        font-size: 1.4rem;
    }
    #ratings {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

</style>