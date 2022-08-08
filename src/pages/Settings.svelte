<script>
import {ionTabBarElementCurrent} from "$stores/stores.js"
import {showAlert,selectTab} from "$utils/utils.js"
import { close,informationCircle  } from 'ionicons/icons';
import OptionSettings from "$components/OptionSettings.svelte";
import InstallPWA from "$components/InstallPWA.svelte";
import { infoStore } from "$src/stores/info";
import { _ ,locale} from 'svelte-i18n'



const info=()=>{
  showAlert( {
      header: `${ $_('SETTINGS.TITLE_INFO')}`,
      message: `
      <strong>${ $_('SETTINGS.INFO_VERSION')}</strong>:<br>${$infoStore["version"]}<hr><br>
      <strong>${ $_('SETTINGS.INFO_DEVELOPER')}</strong>:<br>${$infoStore["developer"]}<hr><br>
      `,
      buttons: [ `${ $_('OK')}`],
    })
}



  </script>
  
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button on:click={()=>{info()}}>
          <h4><ion-icon slot="icon-only" icon={informationCircle} /></h4>
        </ion-button>
      </ion-buttons>
        <ion-buttons slot="secondary">
            <ion-button on:click={()=>{selectTab($ionTabBarElementCurrent,"home")}}>
              <h4><ion-icon slot="icon-only" icon={close} /></h4>
            </ion-button>
          </ion-buttons>

      <ion-title>{ $_('SETTINGS.TITLE')}</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large"></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-grid>
        <ion-row><ion-col><h1>{ $_('SETTINGS.TITLE_DISPLAY')}</h1></ion-col></ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"guardarFatiga"} title="{ $_('SETTINGS.COMPUTE_EXHAUSTION_CARDS')}" subtitle={ $_('SETTINGS.NOTICE_COMPUTE_EXHAUSTION_CARDS')} />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"confirmarNuevoTurno"} title={ $_('SETTINGS.CONFIRM_NEW_ROUND')} subtitle={ $_('SETTINGS.NOTICE_CONFIRM_NEW_ROUND')} />
        </ion-col>
      </ion-row>
      <hr>
      <ion-row><ion-col><h1>{ $_('SETTINGS.TITLE_MODES')}</h1></ion-col></ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"modeMountain"} title={ $_('SETTINGS.MODE_MAILLOT_CLIMBER')} subtitle={ $_('SETTINGS.NOTICE_MODE_MAILLOT_CLIMBER')} />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"modeSprint"} title={ $_('SETTINGS.MODE_MAILLOT_POINTS')} subtitle={ $_('SETTINGS.NOTICE_MODE_MAILLOT_POINTS')} />
        </ion-col>
      </ion-row>
      <hr>
      <ion-row><ion-col><h1>{ $_('SETTINGS.TITLE_EXPANSION')}</h1></ion-col></ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"expansion_peloton"} title={ $_('SETTINGS.EXPANSION_6_PLAYERS')} subtitle={ $_('SETTINGS.NOTICE_EXPANSION_6_PLAYERS')} />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <InstallPWA/>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>