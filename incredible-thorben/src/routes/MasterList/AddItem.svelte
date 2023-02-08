<script>
    import Icon from "../../lib/components/helpers/Icon.svelte";
</script>

<div id="iconWrapper">
    <slot name="Icon">
        <Icon name="plus"></Icon>
    </slot>
</div>

<style>
    #iconWrapper {
        background-color: #E5E5E5;
        padding: 4px 0;
        border-radius: 4px;
        cursor: pointer;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    #iconWrapper:hover {
        background-color: #D4D4D4;
        /* stroke: green; */
    }
</style>