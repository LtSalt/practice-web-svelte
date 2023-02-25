<script>
    import { createEventDispatcher } from "svelte";
    
    export let items;
    export let activeItem;
    
    const dispatch = createEventDispatcher();
</script>

<div id="tabs" class="element">
    {#each items as item}
        <div 
        class="tab hover" 
        class:active={activeItem === item}
        on:mouseup={() => dispatch("tabChange", item)}>{item}</div>
    {/each}
</div>


<style>
    #tabs {
        display: flex;
        background-color: grey;
        border-radius: 4px;
    }
    .tab {
        flex: 1;
        text-align: center;
        cursor: pointer;
    }
    .active {
        background-color: #374151;
    }
</style>