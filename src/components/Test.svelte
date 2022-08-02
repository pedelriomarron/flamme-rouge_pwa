<script lang="ts">
  import { menuController, modalController, registerMenu } from "$ionic/svelte";
  import * as allIonicIcons from "ionicons/icons";
  import { pwaBeforeInstallPrompt, canInstall,pwaNeedRefresh,PWAStatus, pwaStatusStream } from "$lib/pwa";
  import IOSInstall from "$components/IOSInstall.svelte";
  import { isPlatform } from "@ionic/core";
  import {showAlert,selectTab,saveGame} from "$utils/utils.js"


const click=()=>{
  alert("s")
  saveGame()
}

 
 
</script>
dd
<ion-button on:click={click}>
  
</ion-button>


<style>

</style>