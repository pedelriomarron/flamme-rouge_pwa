<script lang="ts">
    import {selectedCurrentTeams,defaultTeams, baseURL, settingsStore} from "$stores/stores.js"
    import { create  } from 'ionicons/icons';
    import {showAlert,selectTab} from "$utils/utils.js"

    let selection = [];

    function editNameTeam(team){
        const options = {
      cssClass: "",
      header: "Nombre del equipo",
     // subHeader:"Escribre un nombre para el equipo",
      inputs: [
        {
          name: "team",
          type: "text",
          placeholder: "Nombre del equipo",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (e) => {
            console.log("Confirm Ok",e.team);
            team.name = e.team
            $defaultTeams = [...$defaultTeams];
          },
        },
      ],
    };
    showAlert(options)
    }

    function handleClick(event) {
        console.log(event.target.value,event.target.checked)
        addOrRemoveTeam(event.target.value,event.target.value)
  }

    function addOrRemoveTeam(id,check){
       let team = $defaultTeams.find(team => team.id == id);
       if( $selectedCurrentTeams.find(t => t.id == team.id) == null ){
            console.log("Add Team: "+id)
            $selectedCurrentTeams = [...$selectedCurrentTeams, team];

       }else{
            console.log("Remove Team: "+id)
            $selectedCurrentTeams = $selectedCurrentTeams.filter(t => t.id !== team.id)
       }
       console.log( "Equipos actuales: "+$selectedCurrentTeams)
    }
  </script>
   
<div>
    <ion-row><ion-col><h1>Equipos</h1></ion-col></ion-row>
        {#each $defaultTeams as team,i}
        {#if team.expansion == "base" || ($settingsStore.expansion_peloton && team.expansion == "peloton")  }
          <ion-row class="ion-align-items-center  ">  
            {#if i!=0}
                <hr />       
            {/if}
            <ion-col   size="2"><input style={"accent-color:"+team.color} type="checkbox"  bind:checked={selection[team.id]}  name={team.id} id={team.id} value={team.id} on:click={handleClick} /></ion-col>
            <ion-col  size="6"><label for={team.id}>{team.name} {#if selection[team.id]} <span on:click|preventDefault={()=>editNameTeam(team)} ><ion-icon slot="" icon={create} /></span> {/if} </label></ion-col>
            <ion-col class="ion-no-padding"  size="4"><label for={team.id}><ion-img class={selection[team.id]? "" :"opacity"} src={$baseURL+"assets/teams/"+team.image} /></label></ion-col>
        </ion-row>
        {/if}
        {/each}

  <!--  <ion-row><ion-col><p>{JSON.stringify( $selectedCurrentTeams)}</p></ion-col></ion-row> -->
</div>


  
  <style>

      .opacity{
        opacity: 0.3
      }
  </style>
  