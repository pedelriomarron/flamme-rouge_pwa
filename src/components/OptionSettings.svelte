<script lang="ts">
    import {settingsStore} from "../stores.js"
    export let title;
    export let subtitle
    export let key



    function handCheck(e){
        $settingsStore[key] = e.detail.checked
    }


  </script>

    <ion-row>
        <ion-col size="10">
            {title}
        </ion-col> 
        <ion-col size="2" class="center">
            <ion-toggle
              on:ionChange={(e)=>handCheck(e)}
              name="name"
              color="dark"
              checked={$settingsStore[key]}
            />
        </ion-col>
    </ion-row>
    <ion-row class="subtitle">
        <ion-col>
            {subtitle}
        </ion-col>  
    </ion-row>
  
  <style>
  
  </style>
  