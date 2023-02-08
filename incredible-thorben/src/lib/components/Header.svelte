<script>
    let backgroundColor = 'foreground';

</script>

<header class={backgroundColor}>
    <div id="left">
        <slot name="left">
        </slot>
    </div>
    <div id="middle">
        <slot name="middle">
        </slot>
    </div>
    <div id="right">
        <slot name="right">
        </slot>
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