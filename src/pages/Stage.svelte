<script>
import CurrentStage from "$components/CurrentStage.svelte";
import FinishLine from "$components/FinishLine.svelte";
import SelectCurrentStage from "$components/SelectCurrentStage.svelte";
import ExploreContainer from "../components/Test.svelte";
import {currentGame,ionTabBarElementCurrent,partidasGuardadas} from "$stores/stores.js"
import {showAlert,selectTab,saveGame,showAlertPromise,allStorage} from "$utils/utils.js"
import { bicycle,close,cloudUpload  } from 'ionicons/icons';
import { _ } from 'svelte-i18n'

     function handleSaveGame(){

      let games = allStorage()
console.log(games)

let radios= []
games.map(g=>{
  radios.push( {
          type: "radio",
          label: g.index,
          value: g.index,
          checked: false,
        })
})

let cancel =  {
                  text:  $_('CANCEL'),
                  role: "cancel",
                  cssClass: "secondary",
                  handler: (value) => {
                  },
                } 


  let partidaGuardada = ()=>{showAlert({
      header: $_('ALERTS.SAVED_GAME'),
      message: $_('ALERTS.SAVED_GAME_SUCCESS'),
      buttons: [$_('OK')],
    })}

    let nuevaPartida={}
    if(games.length<3){
nuevaPartida =    {
          text:  $_('ALERTS.NEW_GAME'),
           handler: async (data) => {
            await   showAlertPromise({
              cssClass: "my-custom-class",
              header:$_('ALERTS.CREATING_GAME'),
              inputs: [
                {
                  name: "name",
                  type: "text",
                  placeholder: $_('ALERTS.NAME_GAME'),
                },
      ],
      buttons: [
                cancel,
                {
                  text:  $_('OK'),
                  handler: (value) => {
                    saveGame($currentGame,"game_"+value.name)
                    partidaGuardada()
                  },
                },
              ],
    })
          },
        }
  
}
let cargarPartida= {}
if(games.length>0){
   cargarPartida =      {
          text: $_('OK'),
          handler: (data) => {
            saveGame($currentGame,data)
            partidaGuardada()
          },
        }
}

    
showAlert({
      header: $_('ALERTS.SAVE_GAME'),
      message: $_('ALERTS.CHOOSE_GAME'),
      inputs:radios,
      buttons: [
   cargarPartida,
     nuevaPartida,
        cancel
      ],
    })
    partidasGuardadas.set(allStorage().length)
}
  </script>
  
  <ion-header>
    <ion-toolbar>
      <ion-title> {$_('STAGE.STAGE')} {$currentGame.currentStage}/{$currentGame.totalStages} </ion-title>
      <ion-buttons slot="end">
        <ion-button on:click={handleSaveGame}>
          <ion-icon slot="icon-only" icon={cloudUpload} />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large"></ion-title>
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