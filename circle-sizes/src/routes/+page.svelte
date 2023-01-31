<script>
    import Filter from "$lib/components/Filter.svelte";
    import Chart from "$lib/components/Chart.svelte";
</script>

<main>
    <Filter></Filter>
    <Chart></Chart>    
</main>

<style>
    main {
        width: 100%;
        margin: 20px 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>