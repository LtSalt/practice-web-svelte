<script>
    let checked = false;
    export let label;
</script>

<div id="todo">
    <div class="content">
        <input type="checkbox" name="test" bind:checked>
        <label for="test" class:checked>{label}</label>
    </div>
    <button class="button-delete" on:click>Delete</button>
    
</div>


<style>
    #todo {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        border-radius: 4px;
        border: 1px solid #94A3B8;
    }
    input {
        margin-right: 8px;
        border-color:#94A3B8;
        cursor: pointer;
    }
    .button-delete {
        border-radius: 4px;
        border: none;
        background-color: #FF4000;
        color: #FFFF;
        padding: 6px 12px;
        cursor: pointer;
    }
    .checked {
        text-decoration: line-through;
    }
</style>
