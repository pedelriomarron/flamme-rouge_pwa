<script lang="ts">
    import {selectedStages} from "$stores/stores.js"
    import { flag } from 'ionicons/icons';
    import { _ ,locale} from 'svelte-i18n'

  </script>

  
  <div>
    <ion-row><ion-col><h1>{$selectedStages} {$_('HOME.STAGES')}</h1></ion-col></ion-row>
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
  