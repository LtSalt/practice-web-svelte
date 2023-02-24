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
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 70%;
        width: clamp(400px, 70%, 1000px);
        margin: 30px auto;
    }
</style>