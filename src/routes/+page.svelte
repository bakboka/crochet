<script lang="ts">
    import { projects} from "$lib/project";

    let new_project_name: string = ""

    function create_project() {
        const len = $projects.length
        const new_id = len === 0 ? 1 : $projects[len-1].id + 1
        projects.set([...$projects, {id: new_id, name: new_project_name, lines: []}])
        new_project_name = ""
    }

    function deleteProject(id) {
        projects.set($projects.filter(project => project.id !== id))
    }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="w-full text-center">
        <h1 class="h1 my-10">Choose a project below</h1>
        <div class="flex flex-col gap-4">
            {#each $projects as project}
                <div class="flex flex-row gap-2 justify-center">
                    <a class="card p-4 w-3/4 self-center" href="/projects/{project.id}">
                        <h2>{project.name}</h2>
                    </a>
                    <button class="btn-icon btn-sm variant-ghost self-center" on:click={() => deleteProject(project.id)}>
                        -
                    </button>
                </div>
            {/each}
            <div class="flex flex-row gap-2 justify-center">
                <input type="text" class="input p-2 w-3/4" bind:value={new_project_name} placeholder="Project name"/>
                <button class="btn-icon btn-sm variant-ghost" on:click={() => create_project()}>
                    +
                </button>
            </div>

        </div>
    </div>
</div>
