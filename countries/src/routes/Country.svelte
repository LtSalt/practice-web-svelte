<script>
    import { createEventDispatcher } from "svelte";
    export let country;

    const dispatch = createEventDispatcher();

    function getDetails(){
        dispatch(
            "getDetails",
            { from: country }
        )
    }
</script>

{#if country.flags && country.population && country.region && country.capital}
    <a href="./Details">
        <div class="country element" on:mouseup={getDetails}>
                <img src={country.flags.svg} alt={country.flags.alt}>
            <div class="description">
                <h2 class="name fw-bolder">{country.name.common}</h2>
                <p class="population"><span class="fw-bold">Population: </span>{country.population}</p>
                <p class="region"><span class="fw-bold">Region: </span>{country.region}</p>
                <p class="capital"><span class="fw-bold">Capital: </span>{country.capital[0]}</p>
            </div>
        </div>
    </a>
{/if}

<style>
    .country {
        width: 300px;
        height: 100%;
        border-radius: 8px;
    }
    img {
        width: 100%;
    }
    .description {
        height: 150px;
        padding: 1rem 0 1rem 1rem;
    }
</style>