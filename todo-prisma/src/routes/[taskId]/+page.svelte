 <script>
    export let data;
    $: ({ task } = data);

</script>

<form action="?/updateTask" method="POST">
    <h3>Editing: {task.title}</h3>
    <input type="text" id="title" name="title" placeholder="Task Title" class="field" value={task.title}>
    <textarea id="content" name="content" rows=5 class="field" placeholder="Task Description" value={task.content}/>
    <button type="submit" class="element hover">Update Task</button>
</form> 

<style>
    form {
        width: clamp(400px, 70%, 800px);
        margin: 12px auto;
        border-radius: 4px;
        height: fit-content;
        display: grid;
        gap: 8px;
    }
    input, textarea {
        padding: 4px 8px;
        display: block;
        width: 100%;
    }
    button {
        border-radius: 4px;
        width: 30%;
        margin: 0 auto;
    }
</style>