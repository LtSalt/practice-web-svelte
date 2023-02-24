<form action="?/createTask" method="POST">
    <h3>Create a new Task</h3>
    <input type="text" id="title" name="title" placeholder="Task Title" class="field">
    <textarea id="content" name="content" rows=5 class="field" placeholder="Task Description"/>
    <button type="submit" class="element hover">Create Task</button>
</form> 

<style>
    form {
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