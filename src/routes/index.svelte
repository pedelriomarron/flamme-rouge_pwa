<script lang="ts">
  import { goto } from "@roxi/routify";
  console.log("Index.svelte goto")
  $goto("/tabs/[tabs]", { tabs: "home" }); // $goto("/message/[id]", { id: "5" })
</script>
