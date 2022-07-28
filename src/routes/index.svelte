<script lang="ts">
  import { goto } from "@roxi/routify";
  console.log("Index.svelte goto")
  let base ="" //"/flamme-rouge_pwa"
  $goto(base+"/tabs/[tabs]", { tabs: "home" }); // $goto("/message/[id]", { id: "5" })
</script>
