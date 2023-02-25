<script>
    import { PlusIcon } from "svelte-feather-icons";

    export let data;
    $: ({ movie } = data)
    $: console.log(movie)

    $: Object.keys(movie).forEach(item => {
        movie[item] = movie[item] === "N/A" ? "" : movie[item]
    })

    $: ({Poster, Type, Title, Plot, Year, Runtime, Ratings, Genre, Director} = movie)
    $: imdb = Ratings[0] ? Ratings[0].Value : "-";
    $: rotten = Ratings[1] ? Ratings[1].Value : "-";
    $: meta = Ratings[2] ? Ratings[2].Value : "-";
</script>

<div id="details" class="element">
    {#if Poster}
    <img id="movie-poster" src={Poster} alt="Poster for the {Type} {Title}">
    {/if}
    <div id="right">
        <div id="description">
            <h1 id="title">{Title}</h1>
            <p>{Plot}</p>
            <div id="specs">
                <span>{Year}</span>
                <span>|</span>
                <span>{Runtime}</span>
            </div>
            <div id="ratings">
                <div class="ratings">
                    <h2>IMDb</h2>
                    <p>{imdb}</p>
                </div>
                <div class="ratings">
                    <h2>RT</h2>
                    <p>{rotten}</p>
                </div>
                <div class="ratings">
                    <h2>MC</h2>
                    <p>{meta}</p>
                </div>
            </div>
    </div>
        <form action="?/createMovie" method="POST">
            <input class="submission" type="text" name="title" value={Title}>
            <input class="submission"type="text" name="plot" value={Plot}>
            <input class="submission"type="text" name="genre" value={Genre}>
            <input class="submission"type="text" name="director" value={Director}>
            <input class="submission"type="text" name="imdb" value={imdb}>
            <input class="submission"type="text" name="rotten" value={rotten}>
            <input class="submission"type="text" name="meta" value={meta}>
            <button type="submit" class="element-reverse hover">
                <PlusIcon></PlusIcon>
            </button>
        </form>
    </div>
</div>

<style>
    #details {
        width: clamp(350px, 90%, 1200px);
        margin: 40px auto;
        padding: 12px;
        border-radius: 4px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px
    }
    #right {
        display: grid;
        grid-template-rows: 2fr 1fr;
    }
    #description {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    #title {
        font-size: 1.4rem;
    }
    #ratings {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    form {
        display: flex;
    }
    .submission {
        display: none;
    }
    button {
        margin: auto;
        padding: 8px 20px;
        border-radius: 4px;
    }

</style>