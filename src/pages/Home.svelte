<script>
    import SelectTeams from "$components/SelectTeams.svelte";
    import SelectStages from "$components/SelectStages.svelte";
    import {showAlert,selectTab,updateTabs} from "$utils/utils.js"

    import {selectedStages,currentGame, selectedCurrentTeams,ionTabBarElementCurrent,myTabs,settingsStore} from "$stores/stores.js"

    import { bicycle,settings  } from 'ionicons/icons';

    
    

    let cyclists = [
    { id: "sprinter_red", name: 'Sprinter Rojo', team: 'red_team' ,image:"RedSprinteur.jpg",currentTurn:0,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false, awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0 },
    { id: "rouler_red", name: 'Rodador Rojo', team: 'red_team',image:"RedRouleur.jpg",currentTurn:0 ,currentTime:0,generalTime:0,currentPosition:0 ,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0 },
    { id: "sprinter_blue", name: 'Sprinter Azul', team: 'blue_team' ,image:"BlueSprinteur.jpg",currentTurn:0,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0  },
    { id: "rouler_blue", name: 'Rodador Azul', team: 'blue_team',image:"BlueRouleur.jpg",currentTurn:0,currentTime:0,generalTime:0,currentPosition:0 ,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,mountainPointsCurrent:0,sprintPoints:0,sprintPointsCurrent:0} ,fatiga:0,generalFatiga:0 },
    { id: "sprinter_green", name: 'Sprinter Verde', team: 'green_team' ,image:"GreenSprinteur.jpg",currentTurn:0,currentTime:0,generalTime:0,currentPosition:0 ,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0 },
    { id: "rouler_green", name: 'Rodador Verde', team: 'green_team',image:"GreenRouleur.jpg",currentTurn:0 ,currentTime:0,generalTime:0,currentPosition:0 ,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0 },
    { id: "sprinter_black", name: 'Sprinter Negro', team: 'black_team' ,image:"BlackSprinteur.jpg",currentTurn:0,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0} ,fatiga:0,generalFatiga:0 },
    { id: "rouler_black", name: 'Rodador Negro', team: 'black_team',image:"BlackRouleur.jpg",currentTurn:0 ,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false,awards:{stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0},fatiga:0,generalFatiga:0 },
];


function openSettings(){
  selectTab($ionTabBarElementCurrent,"settings")

  //Update Tab
  //updateTabs($myTabs,"settings",true)
  //$myTabs = [... $myTabs]
  //Update Tab

}


  function getCyclists(){
    console.log("Añadiendo ciclistas")
    let cyclistsCurrent = []

    $selectedCurrentTeams.map(team=>{

      cyclistsCurrent=cyclistsCurrent.concat(cyclists.filter(c=> c.team == team.id))
    })

    console.log(cyclistsCurrent.length)
    
    return cyclistsCurrent;
  }
    

    function handleClick() {
      console.log($selectedCurrentTeams.length+" equipos.")
      if($selectedCurrentTeams.length <2){
        showAlert({
          header: "Seleccionar equipos",
          subHeader: "",
          message: "Seleccionar al menos 2 equipos para empezar la carrera.",
          buttons: ["OK"],
          })
          return
      }

      $currentGame.currentTurn =0
      $currentGame.currentStage=1
      $currentGame.teams =  $selectedCurrentTeams
      $currentGame.totalStages =  $selectedStages
      let cyclistsGen = getCyclists();
      $currentGame.cyclists = cyclistsGen
      $currentGame.cyclistsInRace = cyclistsGen
      $currentGame.cyclistsFinish = []
      $currentGame.ok =  true
      $currentGame.finish=false
      $currentGame.modeMountain = $settingsStore.modeMountain
      $currentGame.modeSprint = $settingsStore.modeSprint
      $currentGame.guardarFatiga = $settingsStore.guardarFatiga
      $currentGame.confirmarNuevoTurno = $settingsStore.confirmarNuevoTurno


      //Reset Cyclists
      $currentGame.cyclists.map(c=>{
        c.currentPosition = 0
        c.currentTime = 0
        c.currentTurn = 0
        c.generalTime = 0
        c.fatiga = 0
        c.generalFatiga = 0
        c.awards={stageWin:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,sprintPointsCurrent:0,mountainPointsCurrent:0}
      })

      console.log("Cambiando de Tab")
      console.log( $ionTabBarElementCurrent)
        //Update Tab
        updateTabs($myTabs,"stage",true)
        updateTabs($myTabs,"general-ranking",true)
        updateTabs($myTabs,"teams-ranking",true)
        //updateTabs($myTabs,"home",true)
        $myTabs = [... $myTabs]
        //Update Tab
        selectTab($ionTabBarElementCurrent,"stage")

  }
  


</script>
  
  <ion-header>

    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button on:click={openSettings}>
          <ion-icon slot="icon-only" icon={settings} />
        </ion-button>
      </ion-buttons>
      <ion-title>Salida</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>

    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Home</ion-title>
      </ion-toolbar>
    </ion-header>
  
    

    <ion-grid>
      <ion-row>
        <ion-col>
            <h1>¡Preparate para el Gran Tour!</h1>
            <h4>Equipos participantes en la Carrera y número de etapas:</h4>
        </ion-col>
      </ion-row>
      <hr/>

      <SelectTeams />
      <hr/>
      <SelectStages/>
      <ion-row>
        <ion-col>
          <ion-button color="brown" size="large" expand="full" on:click={handleClick} ><ion-icon slot="start" icon={bicycle} ></ion-icon>Iniciar el Tour</ion-button >
          </ion-col>
      </ion-row>

     <!--  <ion-row><ion-col><p>{JSON.stringify( $currentGame)}</p></ion-col></ion-row>-->

    </ion-grid>

  </ion-content>


 
  