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

          {#if iosInstall}
            <ion-row>
                <ion-col size="10">
                    {"Instalar PWA (IOS)"}
                </ion-col> 
                <ion-col size="2" class="center">
                    <ion-icon   on:click={showIOSinstall} icon={allIonicIcons["download"]}  />
                </ion-col>
            </ion-row>
            <ion-row class="subtitle">
                <ion-col>
                    {"Instala esta app como PWA en tu dispositivo."}
                </ion-col>  
            </ion-row>
          {/if}
          {#if $canInstall}
          <ion-row>
            <ion-col size="10">
                {"Instalar PWA"}
            </ion-col> 
            <ion-col size="2" class="center">
                <ion-icon  on:click={() => {
                    const prompt = $pwaBeforeInstallPrompt;
                    console.log(prompt)
                    prompt.prompt();
                  }} icon={allIonicIcons["download"]}  />
            </ion-col>
        </ion-row>
        <ion-row class="subtitle">
            <ion-col>
                {"Instala esta app como PWA en tu dispositivo."}
            </ion-col>  
        </ion-row>
          {/if}

  
  
  <style>
  ion-icon {
    cursor: pointer;
  }
  </style>