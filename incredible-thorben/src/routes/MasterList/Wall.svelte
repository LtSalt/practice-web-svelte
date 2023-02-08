<script>
    import OrgItem from "../../lib/components/OrgItem.svelte";
    import AddItem from "./AddItem.svelte";
</script>

<div id="wall">
    <div id="wall-content" class="foreground">
        <slot name="content">
            <OrgItem></OrgItem>
        </slot>
    </div>
    <div class="add-items">
        <slot name="add">
            <AddItem></AddItem>
            <AddItem></AddItem>
        </slot>
    </div>
</div>

<style>
    #wall {
        width: 25%;
        min-width: 220px;
    }
    .add-items {
        margin-top: 12px;
        padding: 4px 0;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }
</style>