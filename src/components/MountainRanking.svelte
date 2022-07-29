<script lang="ts">
    import {currentGame} from "$stores/stores.js"
  </script>
  
  <div>
    <ion-row><ion-col><h2>Clasificación de montaña tras {$currentGame.currentStage-1}/{$currentGame.totalStages} etapas</h2></ion-col></ion-row>
{#if $currentGame.currentStage-1 ==0 }
<ion-row><ion-col class="center"><h2>No se ha completado ninguna etapa.</h2></ion-col></ion-row>

{:else}
{#each  [...$currentGame.cyclists].sort((a, b) => b.awards.mountainPoints - a.awards.mountainPoints) as cyclist,i}
<ion-row class="ion-align-items-center  ">    
    <ion-col size="2"><ion-img class="cyclist-rounded inlay-circle"  src={"assets/cyclists/"+cyclist.image} /></ion-col>
    <ion-col size="6"><span style={"color:"+$currentGame.teams.find(t=> t.id ==cyclist.team).color}>{i+1}.</span> <span>{cyclist.name}</span> <br/>
      <div class="subtitle">
      </div> 
    </ion-col>
      <ion-col size="1"  class="center">{#if i ==0}
        <span><ion-icon class="maillot" slot="end" style=" fill:white;" src={"assets/icons/"+"maillot_mountain.svg"} /> </span>
        {/if}</ion-col>


    <ion-col size="3"  class="center subtitle"><span class="marker" style="padding: 0.6em;" >{cyclist.awards.mountainPoints}</span></ion-col>
    <hr>
</ion-row>
{/each}

{/if}



</div>

