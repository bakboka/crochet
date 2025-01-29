<script lang="ts">
    import { projects } from "$lib/project";
    import { page } from "$app/stores";

    let project = $projects.find(a => a.id == $page.params.project_id);
    console.log(project);
    function increment(i) {
        project.lines[i] += 1;
        projects.set($projects);
    }

    function addRow() {
        project.lines = [...project.lines, 0];
        projects.set($projects);
    }
</script>

<a href="/" class="text-2xl py-5 px-2">Back</a>
<div class="container h-full mx-auto flex justify-center items-center">
    <div class="w-full text-center">
        <div class="my-10 text-3xl">{project.name}</div>
        <div class="mt-10 flex flex-col gap-4">
            {#each project.lines as line,i}
                <button class="card p-4 text-center w-3/4 self-center" on:click={() => increment(i)}>
                    Number of rows: <br/><span class="text-2xl">{line}</span>
                </button>
            {/each}
            <button class="card p-4 text-center w-3/4 self-center" on:click={() => addRow()}>
                Add a row
            </button>
        </div>
    </div>
</div>