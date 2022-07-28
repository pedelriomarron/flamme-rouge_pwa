<script lang="ts">
  import IonTab from "$ionic/svelte/components/IonTabs.svelte";
  import { params } from "@roxi/routify";

  import Controllers from "../Controllers.svelte";
  import Music from "$components/Music.svelte";
  import TabsExplain from "$components/TabsExplain.svelte";

  let tab = $params.tab;

  const myTabs = [
    {
      label: "Explain",
      icon: "pin",
      tab: "explain",
      component: TabsExplain,
    },
    { label: "Controllers", icon: "videocam", tab: "controllers", component: Controllers },
    { label: "Blabla", icon: "musicalNote", tab: "blabla", component: Music },
  ];

  console.log("Tabs", tab, myTabs);

  const logStuff = (event) => {
    console.log(">", event?.detail?.tab, event?.type);
  };
</script>

<IonTab
  slot="bottom"
  tabs={myTabs}
  selected={tab}
  ionTabsWillChange={logStuff}
  ionNavWillLoad={logStuff}
  ionTabsDidChange={logStuff}
/>
