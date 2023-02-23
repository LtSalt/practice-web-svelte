<script>
    import "@fontsource/nunito-sans";
    import CreateTask from "./CreateTask.svelte";
    import Header from "./Header.svelte";
    import Overview from "./Overview.svelte";
    import { setContext } from "svelte";

    export let data;
    
    setContext("data", data)
</script>

<Header></Header>
<main>
    <Overview></Overview>
    <CreateTask></CreateTask>
</main>

<style>
    main {
        margin: 20px 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>