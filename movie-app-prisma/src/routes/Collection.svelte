<script>
    import { getContext } from "svelte";

    let data = getContext("data")
    $: console.log(data)
    
    $: ({ movies } = data)
    $: console.log(movies)
</script>

<section id="collection" class="element">
    <h2>Your Watchlist</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Director</th>
                <th>Your Rating</th>
                <th>Comment</th>
            </tr>
            {#each movies as movie}
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.director}</td>
                <td>{movie.personal}</td>
                <td>{movie.comment}</td>
                
            </tr>
            {/each}

        </table>
        
</section>

<style>
    #collection {
        border-radius: 4px;
        padding: 8px 12px;
        display: flex;
        flex-direction: column;
        gap: 12px
    }
    table {
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: grey;
    }
    td {
        text-align: center;
    }
</style>

