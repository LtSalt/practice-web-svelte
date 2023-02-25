<script>
    import { setContext } from "svelte";

	import Collection from "./Collection.svelte";
    import Results from "./Results.svelte";
	import Search from "./Search.svelte";
	import Tabs from "./Tabs.svelte";

    export let data;
    setContext("data", data)

    const items = ["find", "collection"];
    let activeItem = "find" 
    function tabChange(event) {
        activeItem = event.detail;
    }
</script>

<main>
    <div id="wrapper-tabs">
        <Tabs {items} {activeItem} on:tabChange={tabChange}></Tabs>
    </div>
    {#if activeItem === "find"}
        <Search></Search>
        <Results></Results>
    {:else}
        <Collection></Collection>
    {/if}
</main>

<style>
    main {
        width: clamp(350px, 80%, 1000px);
        margin: 30px auto;
    }
    #wrapper-tabs {
        margin: 20px 0;
    }
</style>