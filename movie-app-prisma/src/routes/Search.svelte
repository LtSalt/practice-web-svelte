<script>
    import { SearchIcon } from "svelte-feather-icons";
    import { search } from "$lib/stores/search.js";

    function debounce(func, timeout = 500){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    };

    async function fetchMovies(event) {
        const searchTerm = event.target.value;
        if (searchTerm.length > 3) {
            const res = await fetch(`http://www.omdbapi.com/?apikey=9b018d1e&s=*${searchTerm}*`);
            const omdbData = await res.json();
            $search = omdbData.Search.sort((a, b) => a.Year - b.Year).reverse();
        }
    }

    $: console.log($search)
</script>

<div id="search-wrapper">
    <div id="search-icon-wrapper">
        <SearchIcon></SearchIcon>
    </div>
    <input type="text" class="element" placeholder="Search for movies"
        on:input={debounce(fetchMovies)}>
</div>

<style>
    #search-wrapper {
        position: relative;
        margin: 0 auto 12px;
    }
    input {
        width: 100%;
        padding: 8px 12px 8px 42px;
        border-radius: 4px;
    }
    #search-icon-wrapper {
        position: absolute;
        left: 12px;
        top: 50%;
        margin-top: -12px
    }
</style>