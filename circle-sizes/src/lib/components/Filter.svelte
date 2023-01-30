<script>
    import Raw from "$lib/data.json";
    import Store from "$lib/store.js";

    let town = "x";

    $: Store.set(Raw.filter(d => d.town === town));
</script>

<section id="user-input">
    <label class="hover">
        <input type="radio" bind:group={town} value={"x"}>
        Town X
    </label>
    <label class="hover">
        <input type="radio" bind:group={town} value={"y"}>
        Town Y
    </label>
</section>

<style>
    #user-input {
        margin: 0 0 16px;
    }
</style>

