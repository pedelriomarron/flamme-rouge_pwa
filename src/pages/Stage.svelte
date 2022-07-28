<script>
    import CurrentStage from "$components/CurrentStage.svelte";
import FinishLine from "$components/FinishLine.svelte";
import SelectCurrentStage from "$components/SelectCurrentStage.svelte";
import ExploreContainer from "../components/Test.svelte";
    import {currentGame,ionTabBarElementCurrent} from "../stores.js"
    import {showAlert,selectTab} from "../utils.js"



  </script>
  
  <ion-header>
    <ion-toolbar>
      <ion-title> Etapa {$currentGame.currentStage}/{$currentGame.totalStages} </ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Stage</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-grid>
      <ion-row>
        <ion-col>
            <SelectCurrentStage/>
        </ion-col>
      </ion-row>
      {#if $currentGame.cyclistsFinish.length >0}
        <FinishLine/>
      {/if}
      {#if $currentGame.cyclistsInRace.length >0}
        <CurrentStage/>
    {/if}

    </ion-grid>
  
  </ion-content>
  