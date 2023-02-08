<script>
    import Wall from "./Wall.svelte";
    import AddItem from "./AddItem.svelte";
    import Icon from "../../lib/components/helpers/Icon.svelte";
</script>

<Wall>
    <AddItem slot="add">
        <Icon slot="Icon" name="folder" stroke="grey" strokeWidth="0.2rem"></Icon>
    </AddItem>
</Wall>