<script>
    import "@fontsource/montserrat";
	import Header from "./Header.svelte";
	import Results from "./Results.svelte";
	import Search from "./Search.svelte";

    // export let data;

    // $:console.log(data);
</script>

<Header></Header>
<main>
    <Search></Search>
    <Results></Results>
</main>

<style>
    main {
        width: clamp(350px, 80%, 1000px);
        margin: 30px auto;
    }
</style>