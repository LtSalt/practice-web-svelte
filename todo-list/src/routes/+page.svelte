<script>
    import Todo from './Todo.svelte'

    let value = '';
    let todos = []

    function addTodo(todo) {
        if (todo !== '') {
            todos.push({id: todos.length + 1, label: todo})
            todos = todos;
            value = ''
        }
    }
    function removeTodo(id) {
        todos = todos.filter(todo => todo.id !== id)
    }
</script>


<section id="todo-list">
    <h1>TODO</h1>
    <form id="input-field" on:submit|preventDefault={() => addTodo(value)}>
        <label for="add-item">Totally forgot!</label>
        <input type="text" id="add-item" placeholder="Add a new item" bind:value>
        <button>Add and forget about it</button>
    </form>
    <section id="todos">
        {#each todos as {id, label} (id)}
            <Todo label={label} on:click={() => removeTodo(id)}></Todo>
        {/each}
    </section>
</section>

<style>
    #todo-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h1 {
        margin: 20px 0;
        color: #0369A1
    }
    #input-field {
        width: 100%;
    }
    label {
        display: block;
        margin-bottom: 4px;
    }
    input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid black;
        height: 30px;
        padding: 0 10px;
    }
    input:focus {
        outline: none;
    }
    button {
        margin-top: 10px;
        width: 100%;
        border: none;
        border-radius: 4px;
        background-color: #0369A1;
        color: #FFFF;
        height: 40px;
        font-size: 0.9rem;
        cursor: pointer;
        margin-bottom: 20px;
    }
    #todos {
        width: 100%;
        /* background-color: ; */
    }
</style>


