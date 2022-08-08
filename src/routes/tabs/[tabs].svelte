<script lang="ts">
  import IonTab from "$lib/ionic/svelte/components/IonTabs.svelte";
  import { params } from "@roxi/routify";
  import {baseURL, currentGame,ionTabBarElementCurrent,myTabs,partidasGuardadas, settingsStore} from "$stores/stores.js"
  import {showAlert,selectTab, allStorage,alerts} from "$utils/utils.js"
  import Home from "$pages/Home.svelte";
  import Stage from "$pages/Stage.svelte";
  import GeneralRanking from "$pages/GeneralRanking.svelte";
  import TeamsRanking from "$pages/TeamsRanking.svelte";
  import Settings from "$pages/Settings.svelte";
  import MountainRanking from "$pages/MountainRanking.svelte";
  import PointsRanking from "$pages/PointsRanking.svelte";
  import Test from "$components/Test.svelte";
  import { _ } from 'svelte-i18n'

  let tabs = $params.tabs;
  let tab = "home";

  const myTabs1 = [
    { label: $_('TABS.HOME'), icon: "home", tab: "home", component: Home,visible:true },
    { label: $_('TABS.STAGE'), icon: "flag", tab: "stage", component: Stage ,visible:true},
    { label: $_('TABS.TIME_RANKING'), icon: "time", tab: "general-ranking", component: GeneralRanking,visible:true },
    { label: $_('TABS.TEAM_RANKING'), icon:  $baseURL+"assets/icons/team.svg", tab: "teams-ranking", component: TeamsRanking,visible:true },
    { label: $_('TABS.SETTINGS'), icon: "settings", tab: "settings", component: Settings ,visible:false},
    { label: $_('TABS.CLIMBER_RANKING'), icon: $baseURL+"assets/icons/mountain.svg", tab: "climber-ranking", component: MountainRanking,visible:false },
    { label: $_('TABS.POINTS_RANKING'), icon: $baseURL+"assets/icons/sprint.svg", tab: "points-ranking", component: PointsRanking,visible:false },
    { label: $_('TABS.TEST'), icon: $baseURL+"assets/icons/sprint.svg", tab: "test", component: Test,visible:false },
  ];

  $myTabs =myTabs1 

  console.log("Tabs", tab, $myTabs);

  const logStuff = (event) => {
    console.log(">", event?.detail?.tab, event?.type);

    let tabOk = false
    if((event?.detail?.tab == "home" ||  event?.detail?.tab == "settings") ) tabOk = true

    //Middleware Este creado un Juego
    if(!tabOk && !$currentGame.ok && event?.type == "ionTabsDidChange"){
      showAlert(alerts.select2team)
      selectTab($ionTabBarElementCurrent,"home")
    }
    
    partidasGuardadas.set(allStorage().length)
    if(localStorage.getItem("settingsStore") != undefined){
      settingsStore.set(JSON.parse(localStorage.getItem("settingsStore")))
    }

  };

</script>

<IonTab
  slot="bottom"
  tabs={$myTabs}
  selected={tab}
  ionTabsWillChange={logStuff}
  ionNavWillLoad={logStuff}
  ionTabsDidChange={logStuff}
/>

