<script>
    import Store from "$lib/store.js";
    import Barchart from "./Barchart.svelte";

</script>

<section id="data-description">
    {#each $Store as {market, employees, customers}}
        <div>Market {market} has {employees} employees and {customers} customers</div>
    {/each}
</section>
<section id="chart-wrapper">
    <Barchart xTarget="employees" title="Employees"></Barchart>
    <Barchart xTarget="customers" title="Customers"></Barchart>
    
</section>

<style>
    #chart-wrapper {
        flex: 1;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
</style>