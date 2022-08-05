<script lang="ts">
import { baseURL } from "$src/stores/stores";
import { goto } from "@roxi/routify";

  function navigate(url) {
    console.log("Navigate url", url);
    $goto(url);
  }



  navigate($baseURL+"/tabs/home/");
</script>
