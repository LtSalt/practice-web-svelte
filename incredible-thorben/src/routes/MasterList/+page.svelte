<script>
    import Header from "../../lib/components/Header.svelte";
    import Wall from "./Wall.svelte";
    import Categories from "./Categories.svelte";

</script>

<Header>
    <span slot="middle">Master List</span>
</Header>
<section id="file-tree">Hallo</section>
<main>
    <Categories></Categories>
</main>

<style>
    main {
        padding: 12px 8px;
        display: flex;
        gap: 12px;
    }
    #file-tree {
        padding: 6px 8px;
    }
</style>