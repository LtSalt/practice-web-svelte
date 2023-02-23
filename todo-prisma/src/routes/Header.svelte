<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { SunIcon, MoonIcon } from "svelte-feather-icons";
    
    let theme;
    let themeChecked;

    onMount(async() => {
        const localStorageTheme = localStorage.getItem("theme", theme);
        theme = localStorageTheme ? localStorageTheme : "light";
        themeChecked = true;
    })

    $: if (browser && themeChecked) localStorage.setItem("theme", theme);
</script>

{#if theme}
    <header class="element">
        <h1>Prisma Tasks!</h1>
        <label class="hover" for="light" class:active={theme === "light"}>
            <SunIcon></SunIcon>
            Light Theme
        </label>
        <input id="light" type=radio bind:group={theme} name="theme" value="light">
        <label class="hover" for="dark" class:active={theme === "dark"}>
            <MoonIcon></MoonIcon>
            Dark Theme
        </label>
        <input id="dark" type=radio bind:group={theme} name="theme" value="dark">
    </header>
{/if}

<style>
    header{
        padding: 4px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    input {
        display: none
    }
    label {
        display: flex;
        align-items: center;
        gap: 0.4em;
    }
    .active {
        display: none;
    }
</style>