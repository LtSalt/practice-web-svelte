<script>
    // let item = {icon: "Icon", Body: "Body", visibility: false};
    let hover = false;
    let withOptions  = false;

    function toggleHover() {
        hover = !hover;
        withOptions = !withOptions;
    }
</script>


<div id="item" class:hover on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
    <div id="left">
        <slot name="left">Icon</slot>
    </div>
    <div id="body">
        <slot name="body">Body</slot>
    </div>
    <div id="options" class:withOptions>
        <slot name="Options">Options</slot>
    </div>
</div>

<style>
    #item {
        padding: 8px 12px;
        position: relative;
        display: flex;
        gap: 16px;
        cursor: pointer;
    }
    #options {
        position: absolute;
        right: 8px;
        visibility: collapse;
    }
    #options.withOptions {
        visibility: visible;
    }
</style>