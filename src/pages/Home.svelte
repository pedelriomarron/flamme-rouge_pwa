<script>
    import SelectTeams from "$components/SelectTeams.svelte";
    import SelectStages from "$components/SelectStages.svelte";
    import {showAlert,selectTab,updateTabs,allStorage, showAlertPromise, alerts} from "$utils/utils.js"
    import { _ ,locale} from 'svelte-i18n'
    import {selectedStages,currentGame, selectedCurrentTeams,ionTabBarElementCurrent,myTabs,settingsStore,partidasGuardadas,baseURL,defaultTeams} from "$stores/stores.js"
    import { bicycle,settings,cloudDownload  } from 'ionicons/icons';
    import { generateCyclist } from "$src/data/cyclist";
    import { generateTeams } from '$src/data/teams'


    defaultTeams.set(generateTeams())

    //locale.set("fr")
    //console.log(locale)

let cyclists = generateCyclist();



async function handleLoadGame(){

  let cancel =  {
                  text: "Cancel",
                  role: "cancel",
                  cssClass: "secondary",
                  handler: (value) => {
                    console.log("Confirm Cancel");
                  },
                } 

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
await showAlertPromise({
      header: "Cargar partida",
      message: "Elige la partida a cargar.",
      inputs: radios,
      buttons: [
        {
          text: "Borrar partida",
          handler: (data) => {
            if(typeof(data) === "undefined" || data === null ) return false
            console.log("delete Ok", data);
            localStorage.removeItem(data)
           // currentGame.set(JSON.parse(localStorage.getItem(data)))
            showAlert({
      header: "Partida Borrada",
      message: "Partida borrada con exito.",
      buttons: ["OK"],
    })
          },
        }, 
        cancel,
        {
          text: "Ok",
          handler: (data) => {
            if(typeof(data) === "undefined" || data === null ) return false
            console.log("Confirm Ok", data);
            currentGame.set(JSON.parse(localStorage.getItem(data)))
            showAlert({
      header: "Partida Cargada",
      message: "Partida cargada con exito.",
      buttons: ["OK"],
    })
          },
        },
      ],
    })

    partidasGuardadas.set(allStorage().length)

}

function openSettings(){
  selectTab($ionTabBarElementCurrent,"settings")

  //Update Tab
  //updateTabs($myTabs,"settings",true)
  //$myTabs = [... $myTabs]
  //Update Tab

}


  function getCyclists(){
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
        showAlert(alerts.select2team)
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
        c.awards={firstInStage:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,sprintPointsCurrent:0,mountainPointsCurrent:0}
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
  

  {$_('WHITE')}
</script>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button on:click={openSettings}>
          <ion-icon slot="icon-only" icon={settings} />
        </ion-button>
      </ion-buttons>
      {#if $partidasGuardadas>0}
      <ion-buttons slot="end">
        <ion-button on:click={handleLoadGame}>
          <ion-icon slot="icon-only" icon={cloudDownload} />
        </ion-button>
      </ion-buttons>
      {/if}
      <ion-title>{$_('HOME.TITLE')}</ion-title>
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
            <h1>{$_('HOME.WELCOME')}</h1>
            <h4>{$_('HOME.INTRO')}</h4>
        </ion-col>
      </ion-row>
      <hr/>

      <SelectTeams />
      <hr/>
      <SelectStages/>
      <ion-row>
        <ion-col>
          <ion-button color="brown" size="large" expand="full" on:click={handleClick} ><ion-icon slot="start" icon={bicycle} ></ion-icon>{$_('HOME.START')}</ion-button >
          </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>

