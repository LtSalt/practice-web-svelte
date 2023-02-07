<script>
    import MasterList from "./MasterList/+page.svelte";
    import Header from "../lib/components/Header.svelte";
</script>


<!-- <div id="marker"></div> -->
<MasterList></MasterList>

<style>
    #marker {
    position: absolute;
    height: 100vh;
    left: 50%;
    border-left: 4px solid black;
    margin-left: - 2px;
}
</style>