import {writable} from "svelte/store";
import {browser} from "$app/environment";

export let projects = writable(browser && JSON.parse(localStorage.getItem("projects")) || [])

function saveProjects() {
    localStorage.setItem('projects', JSON.stringify($projects));
}

projects.subscribe(value => {
    localStorage.setItem('projects', JSON.stringify(value));
});
