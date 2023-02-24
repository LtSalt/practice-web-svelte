<script>
	import Results from "./Results.svelte";
	import Search from "./Search.svelte";

</script>

<!-- <Header></Header> -->
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