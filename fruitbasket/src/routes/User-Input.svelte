<script>
    export let filter;
    function toggleActive(element) {
        console.log(element)
        element.classList.toggle("secondary")
    }
</script>
<!-- have to bind button classes differently  -->
<section id="user-input">
    <label class="secondary" on:click={(event) => toggleActive(event.target)}>
        <input type="radio" bind:group={filter} name="filter" value="origin">
        Regional  vs. Abroad
    </label>
    <label on:click={(event) => toggleActive(event.target)}>
        <input type="radio" bind:group={filter} name="filter" value="production">
        Conventional vs. Organic
    </label>
</section>

<style>
    #user-input {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0 0;
        /* gap: 12px */
    }

    input {
        display: none;
    }
    label {
        cursor: pointer;
        width: 200px;
        text-align: center;
        border: 1px solid black;
        /* border-radius: 8px; */
        padding: 8px 12px;
        /* ... */
    }
    label:first-of-type {
        border-right: none;
    }
    label:last-of-type {
        border-left: none;
    }


</style>