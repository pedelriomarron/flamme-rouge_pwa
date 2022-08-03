<script>
    import CurrentStage from "$components/CurrentStage.svelte";
import FinishLine from "$components/FinishLine.svelte";
import ExploreContainer from "../components/Test.svelte";
    import {currentGame,ionTabBarElementCurrent,settingsStore} from "$stores/stores.js"
    import {showAlert,selectTab} from "$utils/utils.js"
    import { bicycle,close,cloudUpload  } from 'ionicons/icons';
import OptionSettings from "$components/OptionSettings.svelte";
import InstallPWA from "$components/InstallPWA.svelte";







  </script>
  
  <ion-header>
    <ion-toolbar>
        <ion-buttons slot="secondary">
            <ion-button on:click={()=>{selectTab($ionTabBarElementCurrent,"home")}}>
              <h4><ion-icon slot="icon-only" icon={close} /></h4>
            </ion-button>
          </ion-buttons>

      <ion-title>Ajustes</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Ajustes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-grid>
        <ion-row><ion-col><h1>Panel</h1></ion-col></ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"guardarFatiga"} title="Guardar cartas de fatiga" subtitle="Para cada corredor que ha llegado, la app pedirá el número de cartas de fatiga que aún poseemos y pedirá cuantas deben ser guardadas para la etapa siguiente." />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"confirmarNuevoTurno"} title="Solicitar confirmación para terminar el turno" subtitle="Si se activa, se pedirá confirmación para empezar un nuevo turno." />
        </ion-col>
      </ion-row>
      <hr>
      <ion-row><ion-col><h1>Modos</h1></ion-col></ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"modeMountain"} title="Maillot de la montaña" subtitle="LLeva el conteo de los puntos obtenidos de la clasificación de la montaña." />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
            <OptionSettings key={"modeSprint"} title="Maillot Verde" subtitle="LLeva el conteo de los puntos obtenidos de la clasificación por puntos." />
        </ion-col>
      </ion-row>
      <hr>
      <ion-row><ion-col><h1>Expansiones</h1></ion-col></ion-row>
      <hr>
      <ion-row>
        <ion-col>
            <OptionSettings key={"expansion_peloton"} title="Expansión Pelotón" subtitle="Activa esta opción si cuentas con la expansión Pelotón (5-6 jugadores)" />
        </ion-col>
      </ion-row>


      <ion-row>
        <ion-col>
            <InstallPWA/>
        </ion-col>
      </ion-row>


    </ion-grid>
  
  </ion-content>
  