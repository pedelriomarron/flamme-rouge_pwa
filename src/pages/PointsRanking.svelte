<script>
  import CurrentStage from "$components/CurrentStage.svelte";
import Fab from "$components/Fab.svelte";
import FinishLine from "$components/FinishLine.svelte";
import GeneralRanking from "$components/GeneralRanking.svelte";
import SprintRanking from "$components/SprintRanking.svelte";
import ExploreContainer from "../components/Test.svelte";
  import {currentGame,ionTabBarElementCurrent} from "$stores/stores.js"
  import {showAlert,selectTab} from "$utils/utils.js"



</script>

<ion-header>
  <ion-toolbar>
    <ion-title>Clasificación por Puntos</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Clasificación por Puntos</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <SprintRanking/>
  </ion-grid>
<Fab/>
</ion-content>
