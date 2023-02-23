<script>
    import { details } from "$lib/stores/details.js";
    import { pattern, region } from "$lib/stores/filters.js";

	import Search from "./Search.svelte";
	import Country from "./Country.svelte";

    export let data;
    // let pattern;
    // let region;

    function compare(a, b) {
        if(a.name.common < b.name.common) return -1;
        if(a.name.common > b.name.common) return 1;
        return 0;
    }

    $: countries = data.data
        .sort(compare)
        .filter(d => $pattern ? $pattern.test(d.name.common.toLowerCase()) : d)
        .filter(d => $region ? d.region === $region : d);
</script>

<!-- bind:region={region} -->
<!-- on:filterPattern={event => pattern = event.detail.pattern}> -->
<Search></Search>
<main>
    {#each countries as country}
        <Country
            country={country}
            on:getDetails={event => $details = event.detail.from}>
        </Country>
    {/each}
</main>


<style>
    main {
        margin: 20px auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2em;   
        width: fit-content;
    }
</style>