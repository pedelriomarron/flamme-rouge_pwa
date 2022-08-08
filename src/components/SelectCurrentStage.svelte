<script lang="ts">
    import { dice,search } from 'ionicons/icons';
    import { _ } from 'svelte-i18n'

  </script>

  
  <div>
    <ion-row><ion-col><h1>{$_('STAGE.TRACK')}</h1></ion-col></ion-row>
    <ion-row>
        <ion-col size=5>
            <ion-button color="brown" expand="full" size="small"> <ion-icon icon={dice} />  <span>{$_('STAGE.RANDOM_TRACK')}</span></ion-button >
        </ion-col>
        <ion-col size=7>
            <ion-button color="brown"  expand="full" size="small"> <ion-icon icon={search} />  <span>{$_('STAGE.SELECT_TRACK')}</span></ion-button >
        </ion-col>
    </ion-row>
  </div>

  
  <style>
  </style>
