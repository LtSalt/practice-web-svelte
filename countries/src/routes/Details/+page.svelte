<script>
    import { details } from "$lib/stores/details.js";

    let src = $details.flags.svg;
    let alt = $details.flags.alt;
    let nativeName = Object.values($details.name.nativeName).at(-1).common;



</script>

<button id="button-back" class="element">Back</button>
<div id="country-details">
    <img src={$details.flags.svg} alt={$details.flags.alt}>
    <div id="description">
        <h2 class="name fw-bolder">{$details.name.common}</h2>
        <div id="description-left">
            <p><span class="fw-bold">Native Name: </span>{nativeName}</p>
        </div>

    </div>
</div>

<style>
    #country-details {
        display: flex;
    }
    #description {
        display: grid;
        grid-template-columns: 1fr, 1fr;
    }
</style>