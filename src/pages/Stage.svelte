<script>
    import CurrentStage from "$components/CurrentStage.svelte";
import FinishLine from "$components/FinishLine.svelte";
import SelectCurrentStage from "$components/SelectCurrentStage.svelte";
import ExploreContainer from "../components/Test.svelte";
    import {currentGame,ionTabBarElementCurrent,partidasGuardadas} from "$stores/stores.js"
    import {showAlert,selectTab,saveGame,showAlertPromise,allStorage} from "$utils/utils.js"
    import { bicycle,close,cloudUpload  } from 'ionicons/icons';

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
                  text: "Cancel",
                  role: "cancel",
                  cssClass: "secondary",
                  handler: (value) => {
                    console.log("Confirm Cancel");
                  },
                } 


  let partidaGuardada = ()=>{showAlert({
      header: "Partida guardada",
      message: "Partida guardada con exito.",
      buttons: ["OK"],
    })}

    let nuevaPartida={}
    if(games.length<3){
nuevaPartida =    {
          text: "Nueva Partida",
           handler: async (data) => {
            await   showAlertPromise({
              cssClass: "my-custom-class",
              header: "Prompt!",
              inputs: [
                {
                  name: "name",
                  type: "text",
                  placeholder: "Name Game",
                },
      ],
      buttons: [
                cancel,
                {
                  text: "Ok",
                  handler: (value) => {
                    console.log(value)

                    saveGame($currentGame,"game_"+value.name)
                    partidaGuardada()
                    console.log("Confirm Ok");
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
          text: "Ok",
          handler: (data) => {
            console.log("Confirm Ok", data);
            saveGame($currentGame,data)
            partidaGuardada()

          },
        }
}



      
showAlert({
      header: "Guardar partida",
      message: "Elige la partida a sobrescribir.",
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
      <ion-title> Etapa {$currentGame.currentStage}/{$currentGame.totalStages} </ion-title>
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
  