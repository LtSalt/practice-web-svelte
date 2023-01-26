<script>
    import Square from "./Square.svelte"

    const colors = ['red', 'green', 'purple', 'grey', 'blue']
    
    let squares = Array.from({length: 400}, (x, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * 4)]
    }))

    function repaint(id) {
        const index = squares.findIndex((square => square.id === id));
        squares[index].color = colors[Math.floor(Math.random() * 4)]
    }
</script>

<div id="grid-wrapper">
    <div id="grid">
        {#each squares as {id, color} (id)}
            <Square color={color} on:mouseover={() => repaint(id)}>
            </Square>
        {/each}
    </div>
</div>

<style>
    #grid-wrapper {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #grid {
        height: 400px;
        width: 400px;
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: repeat(20, 1fr);
        row-gap: 2px;
        column-gap: 2px;
    }
</style>

