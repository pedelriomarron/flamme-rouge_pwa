<script lang="ts">
    import {baseURL, currentGame} from "$stores/stores.js"
    import { pencil,flag,repeat,arrowForward,trophy,shirt,journal  } from 'ionicons/icons';
    import {showAlert,selectTab,fancyTimeFormat} from "$utils/utils.js"





    //console.log(teams)
  </script>
  
  <div>
    <ion-row><ion-col><h2>Clasificación por equipos tras {$currentGame.currentStage-1}/{$currentGame.totalStages} etapas</h2></ion-col></ion-row>
{#if $currentGame.currentStage-1 ==0 }
<ion-row><ion-col class="center"><h2>No se ha completado ninguna etapa.</h2></ion-col></ion-row>

{:else}
{#each $currentGame.teams as team,i}
<ion-row class="ion-align-items-center  ">    
    <ion-col size="2"><span><ion-icon slot="start" src={$baseURL+"assets/icons/team.svg"} style={"color:"+team.color+";font-size:1.8rem"} /></span></ion-col>
    <ion-col size="7"><span style={"color:"+team.color}>{i+1}.</span> <span>{team.name}</span> <br/>
      <div class="subtitle">
        {#if team.awards.firstInStage >0} {team.awards.firstInStage}x<span><ion-icon slot="end" icon={trophy} color="gold" /></span> {/if}  
        {#if team.awards.secondInStage >0} {team.awards.secondInStage}x<span><ion-icon slot="end" icon={trophy} color="silver" /></span>  {/if}   
        {#if team.awards.thirdInStage >0} {team.awards.thirdInStage}x<span><ion-icon slot="end" icon={trophy} color="bronze" /></span>  {/if} 
      </div> 

    </ion-col>
    <ion-col size="3" class="center"><span class="marker" >{team.awards.total} pts</span></ion-col>
    <hr>
</ion-row>
{/each}

{/if}



</div>



  <style>



  </style>
  