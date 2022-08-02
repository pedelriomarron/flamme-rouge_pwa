<script lang="ts">
  import IonTab from "$lib/ionic/svelte/components/IonTabs.svelte";
  import { params } from "@roxi/routify";
  import {currentGame,ionTabBarElementCurrent,myTabs,partidasGuardadas} from "$stores/stores.js"
  import {showAlert,selectTab, allStorage} from "$utils/utils.js"
  import { pin, images, square } from "ionicons/icons";
  import Home from "$pages/Home.svelte";
  import Stage from "$pages/Stage.svelte";
  import GeneralRanking from "$pages/GeneralRanking.svelte";
  import TeamsRanking from "$pages/TeamsRanking.svelte";
  import Settings from "$pages/Settings.svelte";
  import MountainRanking from "$pages/MountainRanking.svelte";
  import PointsRanking from "$pages/PointsRanking.svelte";
import Test from "$components/Test.svelte";


  let tabs = $params.tabs;
  let tab = "home";

  const myTabs1 = [
    { label: "Inicio", icon: "home", tab: "home", component: Home,visible:true },
    { label: "Etapa", icon: "flag", tab: "stage", component: Stage ,visible:true},
    { label: "General Ranking", icon: "time", tab: "general-ranking", component: GeneralRanking,visible:true },
    { label: "Teams Ranking", icon:  "./assets/icons/team.svg", tab: "teams-ranking", component: TeamsRanking,visible:true },
    { label: "Settings", icon: "settings", tab: "settings", component: Settings ,visible:false},
    { label: "Climber Ranking", icon: "./assets/icons/mountain.svg", tab: "climber-ranking", component: MountainRanking,visible:false },
    { label: "Points Ranking", icon: "./assets/icons/sprint.svg", tab: "points-ranking", component: PointsRanking,visible:false },
    { label: "test", icon: "./assets/icons/sprint.svg", tab: "test", component: Test,visible:false },

  ];

  $myTabs =myTabs1 

  console.log("Tabs", tab, $myTabs);

  const logStuff = (event) => {
    console.log(">", event?.detail?.tab, event?.type);

    let tabOk = false
    if((event?.detail?.tab == "home" ||  event?.detail?.tab == "settings") ) tabOk = true


    //Middleware Este creado un Juego
    if(!tabOk && !$currentGame.ok && event?.type == "ionTabsDidChange"){
      console.log("Aun no se puede entrar:", event?.detail?.tab, event?.type)
      showAlert({
          header: "Crea primero una Carrera",
          subHeader: "",
          message: "Seleccionar al menos 2 equipos y el numero de etapas para empezar la carrera.",
          buttons: ["OK"],
          })
      selectTab($ionTabBarElementCurrent,"home")

    }
    
    partidasGuardadas.set(allStorage().length)




  };

  console.log("Creando IonTab")
</script>

<IonTab
  slot="bottom"
  tabs={$myTabs}
  selected={tab}
  ionTabsWillChange={logStuff}
  ionNavWillLoad={logStuff}
  ionTabsDidChange={logStuff}
/>

