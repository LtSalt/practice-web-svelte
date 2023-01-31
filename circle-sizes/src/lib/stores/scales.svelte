<script>
    import Store from "$lib/store.js";
    import * as d3 from "d3";
    import { readable, derived } from "svelte/store";
    import { innerWidth, innerHeight } from "./dimensions";
    
    console.log($Store)
    
    // export const scaleXEmployees = derived(d3.scaleLinear()
    //     .domain(d3.extent($Store.map(d => d.employees)))
    //     .range(0, innerWidth))
    
    // export const scaleXCustomers = derived(d3.scaleLinear()
    //     .domain(d3.extent(Store.map(d => d.customers)))
    //     .range(0, innerWidth))
    
    export const scaleY = derived(d3.scaleBand()
        .domain($Store.map(d => d.market))
        .range([innerHeight, 0]))

</script>

