<script lang="ts">
    import {currentGame} from "../stores.js"
    import { pencil,flag,repeat,arrowForward,trophy,shirt,journal  } from 'ionicons/icons';
    import {showAlert,selectTab,fancyTimeFormat} from "../utils.js"

  </script>
  
  <div>
    <ion-row><ion-col><h2>Clasificación general tras {$currentGame.currentStage-1}/{$currentGame.totalStages} etapas</h2></ion-col></ion-row>
{#if $currentGame.currentStage-1 ==0 }
<ion-row><ion-col class="center"><h2>No se ha completado ninguna etapa.</h2></ion-col></ion-row>

{:else}
{#each $currentGame.cyclists as cyclist,i}
<ion-row class="ion-align-items-center  ">    
    <ion-col size="2"><ion-img class="cyclist-rounded inlay-circle" src={"assets/cyclists/"+cyclist.image} /></ion-col>
    <ion-col size="7"><span style={"color:"+$currentGame.teams.find(t=> t.id ==cyclist.team).color}>{i+1}.</span> <span>{cyclist.name}</span> <br/>
      <div class="subtitle">
        {#if cyclist.awards.stageWin >0} {cyclist.awards.stageWin}x<span><ion-icon slot="end" icon={trophy} color="gold" /></span> {/if}  
        {#if cyclist.awards.secondInStage >0} {cyclist.awards.secondInStage}x<span><ion-icon slot="end" icon={trophy} color="silver" /></span>  {/if}   
        {#if cyclist.awards.thirdInStage >0} {cyclist.awards.thirdInStage}x<span><ion-icon slot="end" icon={trophy} color="bronze" /></span>  {/if} 
        {#if $currentGame.guardarFatiga==true }
        <br>
        <span style={"font-size:0.45rem;font-weight:bold"} class="subtitle">Guardadados {cyclist.generalFatiga} x
         <ion-icon style={"font-size:0.7rem"} slot="end" icon={journal} color="danger" /> 
         tras la ultima etapa
        </span>   
        {/if} 
      </div> 

    </ion-col>
    <ion-col size="1">
      {#if [...$currentGame.cyclists].sort((a, b) => b.awards.sprintPoints - a.awards.sprintPoints)[0].id ==cyclist.id }
      <span><ion-icon class="" slot="end" style="font-size:1rem" src={"assets/icons/"+"maillot_yellow.svg"} color="green" /> </span>
      {/if}
      {#if [...$currentGame.cyclists].sort((a, b) => b.awards.mountainPoints - a.awards.mountainPoints)[0].id ==cyclist.id }
      <span><ion-icon class="" slot="end" style="font-size:1rem;fill:white;" src={"assets/icons/"+"maillot_mountain.svg"} /> </span>
      {/if}

    </ion-col>
    <ion-col size="2" class="center">{#if i ==0}<span><ion-icon class="maillot" slot="end" style="" src={"assets/icons/"+"maillot_yellow.svg"}  color="gold"  /></span>  {:else}<span class="marker" >+{fancyTimeFormat(cyclist.generalTime)}</span>{/if}</ion-col>
    <hr>
</ion-row>
{/each}

{/if}



</div>



  <style>



  </style>
  