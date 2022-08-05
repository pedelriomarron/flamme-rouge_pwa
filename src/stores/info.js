import { writable } from 'svelte/store'


const infoStore = writable({
    version: "v0.5 (05082022)",
    developer: "Pedro Manuel del Río Marrón",
})







export { infoStore }