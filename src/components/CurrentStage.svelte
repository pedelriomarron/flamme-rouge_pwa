<script lang="ts">
    import {showAlert,selectTab,fatiga, showAlertPromise, mountainySprint} from "../utils.js"
    import {currentGame,} from "../stores.js"


     function handleClickButton(cyclist) {
     
        let a =  showAlert({
        header: `¡${cyclist.name} cruza la meta! ¿Cuantas casillas ha alcanzado tras cruzar la linea de meta?`,
        buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
             // handler: () => { setHandlerMessage('Alert canceled'); }
            },
            {
              text: 'OK',
              role: 'confirm',
            handler: (value) => { handleOk(value,cyclist) }
            }
          ],
        inputs: [
          {
            label: '1',
            type: 'radio',
            value: '1'
          },
          {
            label: '2',
            type: 'radio',
            value: '2'
          },
          {
            label: '3',
            type: 'radio',
            value: '3'
          },
          {
            label: '4',
            type: 'radio',
            value: '4'
          },
          {
            label: '5',
            type: 'radio',
            value: '5'
          }
          
        ]
      })



        return
      
    }

    async function handleOk(e,cyclist){

        let posicionOcupada =0
        $currentGame.cyclistsFinish.map(c=>{
            if(c.currentCalculo && c.currentPosition == e){
              posicionOcupada++
            }
        })
        console.log(posicionOcupada)
        if(posicionOcupada>1){
          showAlert({
            header: "Posición inválida",
            message: `Ya hay dos corredores parados ${e} casillas despues de la linea de meta.`,
            buttons: ["OK"],
    })
          return false
        } 

        if(typeof(e) === "undefined" || e === null ) return false
        cyclist.currentTurn =  $currentGame.currentTurn
        cyclist.currentCalculo =  true
        cyclist.currentPosition =  e
        $currentGame.cyclistsInRace = $currentGame.cyclistsInRace.filter(c => c.id !== cyclist.id)
        $currentGame.cyclistsFinish = [... $currentGame.cyclistsFinish, cyclist];
        console.log(e)


        //Moodulos extra
        if($currentGame.guardarFatiga){
          fatiga(cyclist,currentGame,$currentGame)
        }

        if($currentGame.modeMountain){
          mountainySprint(cyclist,currentGame,$currentGame,"montaña", "mountainPointsCurrent")
        }

        if($currentGame.modeSprint){
          mountainySprint(cyclist,currentGame,$currentGame,"sprint","sprintPointsCurrent")
        }


        //Ordenar bien
        $currentGame.cyclistsFinish.sort(function(a, b){
          if(a.currentCalculo==false && b.currentCalculo==false)
              return a.currentTime - b.currentTime
          if(a.currentCalculo==true && b.currentCalculo==false)
              return 1
          if(a.currentCalculo==false && b.currentCalculo==true)
              return -1
          else{
                return b.currentPosition - a.currentPosition
              }
        
        });


       
    }

  </script>
  
  <div>
    <ion-row class="ion-align-items-center"><ion-col size="9"><h1>En Carrera</h1></ion-col><ion-col size="3">
      {#if $currentGame.currentTurn>0}
      <p>+{$currentGame.currentTurn} turnos</p>
      {/if}
    </ion-col></ion-row>
        {#each $currentGame.cyclistsInRace as cyclist,i}
        <ion-row class="ion-align-items-center ">   
            <ion-col size="2"><ion-img class="cyclist-rounded inlay-circle" src={"assets/cyclists/"+cyclist.image} /></ion-col>
            <ion-col size="7"><span>{cyclist.name}</span></ion-col>
            <ion-col class="center" size="3"><ion-button color="brown" on:click={()=> handleClickButton(cyclist)} size="small">Meta</ion-button></ion-col>
        </ion-row>
        <hr/>
        {/each}

</div>



  <style>



  </style>
  