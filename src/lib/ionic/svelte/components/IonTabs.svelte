<script lang="ts">
  import { onMount } from "svelte";
  import {ionTabBarElementCurrent} from "$stores/stores.js"

  import * as ionIcons from "ionicons/icons";

  let ionTabBarElement;

  export let tabs;
  export let selected = undefined;
  export let ionTabsDidChange = (event) => {};
  export let ionNavWillLoad = (event) => {};
  export let ionTabsWillChange = (event) => {};
  export let slot = "bottom";

  // selected-tab does not seem to work - so we brute force it into the right method
  // https://github.com/ionic-team/ionic-framework/issues/20060
  let tries = 0;
  let controller;
  const selectTab = async () => {
    if (controller && controller.select) {
      controller.select(selected).then(async (x) => {
        const y = await controller.getSelected();
      });
    }

    // somehow the tabs-present method does not run well on the first time, even though it gives positive response
    if (tries < 5) {
      setTimeout(() => {
        tries++;
        selectTab();
      }, 5);
    }
  };

  onMount(() => {
    controller = ionTabBarElement;
    $ionTabBarElementCurrent = controller
    if (selected) {
      selectTab();
    }
  });
</script>

<ion-tabs
  on:ionTabsDidChange={ionTabsDidChange}
  on:ionNavWillLoad={ionNavWillLoad}
  on:ionTabsWillChange={ionTabsWillChange}
  bind:this={ionTabBarElement}
>
  {#each tabs as tab}
    <ion-tab tab={tab.tab}>
      <svelte:component this={tab.component} />
    </ion-tab>
  {/each}

  {#if slot === "bottom" || slot === ""}
    <ion-tab-bar slot="bottom" selected-tab={selected}>
      {#each tabs as tab}
      {#if tab.visible == true}
        <ion-tab-button tab={tab.tab}>
          <ion-label>{tab.label}</ion-label>
          {#if  (tab.icon.match(/\//g) || []).length > 0 } 
          <ion-icon src={tab.icon} />
          {:else} <ion-icon icon={ionIcons[tab.icon]} />
          {/if}

        </ion-tab-button>
      {/if}

      {/each}
    </ion-tab-bar>
  {/if}

  {#if slot === "top"}
    <ion-tab-bar slot="top" selected-tab={selected}>
      {#each tabs as tab}
        <ion-tab-button tab={tab.tab}>
          <ion-label>{tab.label}</ion-label>
          <ion-icon icon={ionIcons[tab.icon]} />
        </ion-tab-button>
      {/each}
    </ion-tab-bar>
  {/if}
</ion-tabs>
