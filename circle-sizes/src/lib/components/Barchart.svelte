<script>
    import * as d3 from "d3";
    import Raw from "$lib/data.json";
    import Store from "$lib/store.js";
    import { width, height, innerWidth, innerHeight, margins } from "$lib/stores/dimensions.js";

    export let xTarget;
    export let title;

    const scaleX = d3.scaleLinear()
        .domain([0, d3.max(Raw.map(d => d[xTarget]))])
        .range([0, $innerWidth])
    
    const scaleY = d3.scaleBand()
        .domain($Store.map(d => d.market))
        .range([$innerHeight, 0])
        .padding(0.1)

    let pinXAxis, pinYAxis;
    $: if (pinXAxis) {
        d3.select(pinXAxis).call(d3.axisBottom(scaleX));
    }
    $: if (pinYAxis) {
        d3.select(pinYAxis).call(d3.axisLeft(scaleY));
    }
</script>

<div class="chart-wrapper">
<h1>{title}</h1>
 <svg class="chart" width={$width} height={$height}>
    <g transform="translate({$margins.left}, {$margins.top})">
        {#each $Store as bar}
            <rect
                x=0
                y={scaleY(bar.market)}
                width={scaleX(bar[xTarget])}
                height={scaleY.bandwidth()}
                fill="orange">
            </rect>
        {/each}
    </g>
    <g
        bind:this={pinXAxis}
        transform="translate({$margins.left},{$innerHeight + $margins.top})">
    </g>
    <g
        bind:this={pinYAxis}
        transform="translate({$margins.left}, {$margins.top})">
    </g>
</svg>
</div>

 <style>
    .chart {
        border: none;
    }
    .chart-wrapper {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
 </style>