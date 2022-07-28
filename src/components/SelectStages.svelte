<script lang="ts">
    import {selectedStages} from "../stores.js"
    import { flag } from 'ionicons/icons';
  
  </script>

  
  <div>
    <ion-row><ion-col><h1>{$selectedStages} Etapas</h1></ion-col></ion-row>
    <ion-row>
        <ion-col>
            <ion-range min={2} max={21} defaultValue={2} on:ionChange={(e) => $selectedStages = e.detail.value}  > 
                <ion-icon slot="start" icon={flag}></ion-icon>
                <ion-icon slot="end" icon={flag}></ion-icon>
            </ion-range>
        </ion-col>
    </ion-row>
  </div>

  
  <style>
  </style>
  