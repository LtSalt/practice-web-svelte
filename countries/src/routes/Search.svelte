<script>
    import { SearchIcon } from "svelte-feather-icons";
    // import { createEventDispatcher } from "svelte";
    import { pattern, region } from "$lib/stores/filters.js";

    let inputValue = "";
    // $: inputValue = $pattern.toString();
    function debounce(func, timeout = 500){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    };

    function filterPattern(event) {
        $pattern = new RegExp(event.target.value.toLowerCase())
    };
</script>

<div class="wrapper">
    <div id="input-wrapper">
        <div id="icon-wrapper">
            <SearchIcon></SearchIcon>
        </div>
        <input 
            id="searchbox" 
            class="element" 
            type="text" 
            placeholder="Search for a country"
            on:input={debounce(filterPattern)}
            value={inputValue}>
            <!-- on:input={debounce(filterPattern)}> -->
    </div>
    <select id="pick-region" class="element" name="pick-region" bind:value={$region}>
        <option value="" disabled selected hidden>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
</div>
    
<style>
    .wrapper {
        display: flex;
        padding: 0 5vw;
        justify-content: space-between;
    }
    input, select {
        border: none;
    }
    #input-wrapper {
        position: relative;

    }
    #icon-wrapper {
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0 0.5rem 0 0.2rem;

    }
    input {
        width: 300px;
        height: 100%;
        padding: 1rem 0.5rem 0.8rem 2rem;
    }
    select {
        cursor: pointer;
    }

</style>