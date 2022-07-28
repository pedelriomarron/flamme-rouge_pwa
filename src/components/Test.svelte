<script lang="ts">
  import { menuController, modalController, registerMenu } from "$ionic/svelte";
  import * as allIonicIcons from "ionicons/icons";
  import { pwaBeforeInstallPrompt, canInstall,pwaNeedRefresh,PWAStatus, pwaStatusStream } from "$lib/pwa";
  import IOSInstall from "$components/IOSInstall.svelte";
  import { isPlatform } from "@ionic/core";




  let iosInstall = isPlatform("ios") && !isPlatform("pwa");

  const showIOSinstall = async () => {
    const modal = await modalController.create({
      component: IOSInstall,
      componentProps: {},
      showBackdrop: true,
      backdropDismiss: false,
    });

    modal.onDidDismiss().then((value) => {
      console.log("Dismissed the modal", value);
      if (value.role === "backdrop") console.log("Backdrop clicked");
    });

    await modal.present();
  };
</script>

      <ion-list>
        {#if iosInstall}
          <ion-item on:click={showIOSinstall}>
            <ion-icon icon={allIonicIcons["download"]} slot="start" />
            <ion-label>Install this app as PWA</ion-label>
          </ion-item>
          <ion-item />
        {/if}
        {#if $canInstall}
          <ion-item
            on:click={() => {
              const prompt = $pwaBeforeInstallPrompt;
              console.log(prompt)
              prompt.prompt();
            }}
          >
            <ion-icon icon={allIonicIcons["download"]} slot="start" />
            <ion-label>Install this app as PWA</ion-label>
          </ion-item>
          <ion-item />
        {/if}
      </ion-list>


<style>
  ion-item {
    cursor: pointer;
  }

</style>