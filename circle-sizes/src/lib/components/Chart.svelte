<script>
    import Store from "$lib/store.js";
    
    let innerWidth;
    let innerHeight;

    const margins = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 50
    }

    $: panelWidth = innerWidth - margins.right - margins.left;
    $: panelHeight = innerHeight / 2 - margins.top - margins.bottom;



    


</script>

<svelte:window bind:innerWidth bind:innerHeight/>


<section id="data-description">
    {#each $Store as {market, employees}}
        <div>Market {market} has {employees} employees</div>
    {/each}
</section>
<section id="charts">
    <svg id="chart-employees" width={panelWidth} height={panelHeight}></svg>
    <svg id="chart-customers" width={panelWidth} height={panelHeight}></svg>
</section>