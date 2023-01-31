import { readable, derived } from "svelte/store";

export const margins = readable({
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
})

export const width = readable(450);
export const height = readable(250);

export const innerWidth = derived(
    [width, margins],
    ([$width, $margins]) => $width - $margins.left - $margins.right
);
export const innerHeight = derived(
    [height, margins],
    ([$height, $margins]) => $height - $margins.top - $margins.bottom
);


