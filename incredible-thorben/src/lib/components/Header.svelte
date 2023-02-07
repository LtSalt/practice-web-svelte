<script>
    let backgroundColor = 'foreground';

</script>

<header class={backgroundColor}>
    <div id="left">
        Thing
        <slot></slot>
    </div>
    <div id="middle">
        <slot></slot>
        Thing
    </div>
    <div id="right">
        <slot></slot>
        ThingThing
    </div>
</header>

<style>
    header {
        height: 50px;
        padding: 6px 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    header > div {
        flex: 1;
    }
    #left {
        text-align: left;
    }
    #right {
        text-align: right;
    }
    #middle {
        text-align: center;
    }
    
</style>