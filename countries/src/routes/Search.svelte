<!-- Ressources
- https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
 -->

<script>
    let region;

</script>

<form on:submit|preventDefault>
    <input id="searchbox" class="element" type="text" placeholder="Search for a country">
    <!-- <label for="pick-region">Region Name</label> -->
    <select id="pick-region" class="element" name="pick-region" bind:value={region}>
        <option value="" disabled selected hidden>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
</form>

<style>
    form {
        display: flex;
        padding: 0 5vw;
    }
    input, select {
        border: none;
        padding: 0.8rem;
    }
    select {
        margin-left: auto;
        cursor: pointer;
    }

</style>