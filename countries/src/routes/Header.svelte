<script>
    import { MoonIcon, SunIcon } from "svelte-feather-icons";  
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    
    let theme;
    let pageload;

    onMount(async() => {
        const storedTheme = localStorage.getItem("theme", theme);
        theme = storedTheme ? storedTheme : "light";
        pageload = true;
    })
    
    $: if (browser && pageload) localStorage.setItem("theme", theme);
</script>

{#if theme}
<header class="element">
    <h1>Where in the world?</h1>
    <div id="theme-switcher">
        <label for="light" class:active={theme === "light"} class="fw-bold">
            <SunIcon></SunIcon>
            Light Mode
            <input id="light" type="radio" bind:group={theme} name="theme" value="light">
        </label>
        <label for="dark" class:active={theme === "dark"} class="fw-bold">
            <MoonIcon></MoonIcon>
            Dark Mode
            <input id="dark" type="radio" bind:group={theme} name="theme" value="dark">
        </label>
    </div>
</header>
{/if}

<style>
    header.element {
        margin-bottom: 30px;
        padding: 0.7rem 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-size: 1.7rem
    }
    input {
        display: none;
    }
    label {
        cursor: pointer;
        display: flex;
        align-items: center;
        line-height: 100%;
        gap: 0.5rem;
        text-align: center;
    }
    label.active {
        display: none;
    }
</style>