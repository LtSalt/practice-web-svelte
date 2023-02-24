<script>
    import { SunIcon, MoonIcon } from "svelte-feather-icons";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    
    let theme;
    let themeSet;

    onMount(async() => {
        const storedTheme = localStorage.getItem("theme", theme);
        theme = storedTheme ? storedTheme : "light";
        themeSet = true;
    })

    $: if (browser && themeSet) localStorage.setItem("theme", theme)
</script>

{#if theme}
    <header class="element">
        <h1 id="title">Fancy Movie App</h1>
        <div id="theme-toggle">
            <label class="hover" class:active={theme === "light"} for="light">
                <SunIcon></SunIcon>
                Light Mode
            </label>
            <input id="light" type=radio name="theme" bind:group={theme} value="light">
            <label class="hover" class:active={theme === "dark"} for="dark">
                <MoonIcon></MoonIcon>
                Dark Mode
            </label>
            <input id="dark" type=radio name="theme" bind:group={theme} value="dark">
        </div>
    </header>
{/if}

<style>
    header {
        padding: 8px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        display: none;
    }
    label {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .active {
        display: none;
    }
</style>