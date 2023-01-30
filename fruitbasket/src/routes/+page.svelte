<script>
    import * as aq from "arquero";
    import * as d3 from "d3";
    let filter = "origin";
    import UserInput from "./User-Input.svelte";
    import Chart from "./Chart.svelte";

    export let data;
    const fruits = data.data;

    $: shares = aq.from(fruits)
        .groupby("fruit", filter)
        .count()
        .groupby("fruit")
        .derive({pct: d => d.count / op.sum(d.count)})
        .pivot(filter, "pct")
        .objects()
    // console.log(shares)
    $: keys = new Set(fruits.map(f => f[filter]));

    $: stackGenerator = d3.stack()
        .keys(keys);
    $: stacks = stackGenerator(shares);

    let width = 600;
    let height = 600;
    const padding = 50;

    const xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([padding, width - padding]);

    const yScale = d3.scaleBand()
        .domain(fruits.map(f => f.fruit))
        .range([height - padding, padding])
        .padding(.1)

    $: fillScale= d3.scaleOrdinal()
        .domain(keys)
        .range(['#475569', 'grey']);
</script>


<main>
    <UserInput bind:filter></UserInput>
    <!-- <Chart></Chart> -->
    <svg width={width} height={height}>
        {#each stacks as stack (stack.index)} 
            <g fill={fillScale(stack.key)}>
                {#each stack as share}
                    <rect
                    x={xScale(share[0])}
                    y={yScale(share.data.fruit)}
                    width={xScale(share[1]) - xScale(share[0])}
                    height={yScale.bandwidth()}
                    class={share.data.sektor}>
                    </rect>
                {/each}
    
            </g>
        {/each}
    </svg>


</main>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>