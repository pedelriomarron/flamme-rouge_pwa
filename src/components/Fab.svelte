<script>
import ExploreContainer from "../components/Test.svelte";
import { bicycle,close,trophy,time  } from 'ionicons/icons';
import {showAlert,selectTab} from "$utils/utils.js"
import {selectedStages,currentGame, selectedCurrentTeams,ionTabBarElementCurrent,myTabs,settingsStore,baseURL} from "$stores/stores.js"



function handle(tab){
    selectTab($ionTabBarElementCurrent,tab)
}

</script>

{#if $currentGame.modeSprint==true || $currentGame.modeMountain==true }
<ion-fab horizontal="end" vertical="bottom"  >
    <ion-fab-button color="brownmain">
      <ion-icon icon={trophy} />
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button on:click={()=> handle("teams-ranking")} color="light">
        <ion-icon src={$baseURL+"assets/icons/team.svg"} />
      </ion-fab-button>
      <ion-fab-button on:click={()=> handle("general-ranking")} color="light">
        <ion-icon icon={time} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button color="light">
        <ion-icon icon={time} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      {#if $currentGame.modeSprint==true }
      <ion-fab-button on:click={()=> handle("points-ranking")} color="light">
        <ion-icon src={$baseURL+"assets/icons/sprint.svg"} />
      </ion-fab-button>
      {/if}
     
      {#if $currentGame.modeMountain==true }
      <ion-fab-button on:click={()=> handle("climber-ranking")} color="light">
        <ion-icon src={$baseURL+"assets/icons/mountain.svg"} />
      </ion-fab-button>
      {/if}

    </ion-fab-list>
</ion-fab>
{/if}


<style>

ion-icon {
    filter: drop-shadow(0px 0px 1px white);
}

</style>
      