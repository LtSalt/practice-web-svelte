<script>
    import { getContext } from "svelte";
    import { enhance } from "$app/forms";

    const data = getContext("data")
    $: ({ tasks } = data);
</script>

<section id="overview">
    <h3>Your Tasks</h3>
    {#each tasks as task}
        <div class="task element">
            <header>{task.title}</header>
            <p>{task.content}</p>
            <form action="?/deleteTask&id={task.id}" method="POST">
                <!-- use:enhance -->
                    <button type="submit" class="element hover">
                        Delete Task
                    </button>
            </form>
            <a href="/{task.id}" role="button">Edit Task</a>
        </div>
    {/each}
</section>

<style>
    #overview {
        display: grid;
        gap: 8px;
    }
    .task {
        width: 90%;
        border-radius: 4px;
        padding: 4px 8px
    }
    header {
        font-weight: bold;
        margin-bottom: 2px;
    }
</style>