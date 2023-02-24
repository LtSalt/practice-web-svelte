<script>
    import {search } from "$lib/stores/search.js";
</script>

{#if $search}
    <section id="current-search">
        {#each $search as result}
            <a href="/{result.imdbID}">
                <img class="movie-poster" src={result.Poster} alt="Poster for the {result.Type} {result.Title}">
            </a>
        {/each}
    </section>
{/if}

<style>
    #current-search {
        margin: 20px 0;
        display: grid;
        gap: 20px
    }
    .movie-poster {
        width: 100%;
        cursor: pointer;
    }
    @media (min-width: 500px) {
        #current-search {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 700px) {
        #current-search {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (min-width: 1000px) {
        #current-search {
            grid-template-columns: repeat(4, 1fr);
        }
    }

</style>

