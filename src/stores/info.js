import { writable } from 'svelte/store'


const infoStore = writable({
    version: "v0.5.1 (08082022)",
    developer: "Pedro Manuel del Río Marrón",
})







export { infoStore }