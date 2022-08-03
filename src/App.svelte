<script lang="ts" context="module">
  import { Router, router } from "../.routify/instance.default.js";
  import { PWAStatus, pwaStatusStream } from "$lib/pwa";
  import { baseURL } from "./stores/stores.js";
  

  /* Theme variables */
  import "./theme/variables.css";
  import "./theme/main.css";

  import { onMount } from "svelte";

  export const load = (url) => router.url.replace(url);

  pwaStatusStream.subscribe((status: PWAStatus) => {
    console.log("PWA status", status);

    if (status.updateFunction) {
      console.log("PWA updating itself in 4 secs......");
      setTimeout(() => {
        status.updateFunction();
      }, 4000);
    }
  });
</script>

<Router {router} />
