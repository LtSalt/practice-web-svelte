import { writable } from "svelte/store";

export let pattern = writable();
export let region = writable("");