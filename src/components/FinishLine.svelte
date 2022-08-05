<script lang="ts">
    import {showAlert,selectTab,fancyTimeFormat,updateTabs,fatiga,showAlertPromise, mountainySprint} from "$utils/utils.js"
    import {baseURL, currentGame,ionTabBarElementCurrent,myTabs} from "$stores/stores.js"
    import { pencil,flag,repeat,arrowForward,trophy,journal  } from 'ionicons/icons';

    let finish = false;


      async function handleClickNextTurn(){
        if($currentGame.confirmarNuevoTurno){

        let res= await showAlertPromise({
                header: `Confirmar fin del turno`,
                message:"¿Estas seguro que todos los corredores han realizado sus movimientos en este turno?",
                buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: (e) => {return e}
                },{
                    text: 'OK',
                    role: 'ok',
                    handler:  function(e){ return e}
                }
                ]
         })

         if(res.role =="cancel") return false
        }
        //TODO: hacer formula
        $currentGame.cyclistsFinish.sort(function(a, b){return b.currentPosition - a.currentPosition});
        $currentGame.cyclistsFinish.map((c,i)=>{
            if(c.currentCalculo==false)return
            if(i==0 && $currentGame.currentTurn ==0)  $currentGame.currentPositionWinner =c.currentPosition
            console.log("Calculadon: "+c.id)

            c.currentTurn =  $currentGame.currentTurn
            c.currentTime= (((c.currentTurn+1)*60)+c.currentTurn*10)
            c.currentTime=  c.currentTime -(c.currentPosition*10 )

            let diferencia = 60-($currentGame.currentPositionWinner*10)
            c.currentTime =    c.currentTime - diferencia

            c.currentCalculo = false
        })
        $currentGame.currentTurn++
        $currentGame.cyclistsFinish.sort(function(a, b){return a.currentTime - b.currentTime});

    }

    function handleClickFinishStage(){
        console.log("ETAPA ACABADA")
        $currentGame.cyclistsFinish.sort(function(a, b){return b.currentPosition - a.currentPosition});
        $currentGame.cyclistsFinish.map((c,i)=>{
            if(c.currentCalculo==false)return
            if(i==0 && $currentGame.currentTurn ==0)  $currentGame.currentPositionWinner =c.currentPosition
            console.log("Calculadon: "+c.id)

            c.currentTurn =  $currentGame.currentTurn
            c.currentTime= (((c.currentTurn+1)*60)+c.currentTurn*10)
            c.currentTime=  c.currentTime -(c.currentPosition*10 )

            let diferencia = 60-($currentGame.currentPositionWinner*10)
            c.currentTime =    c.currentTime - diferencia

            c.currentCalculo = false
        })
        $currentGame.cyclistsFinish.sort(function(a, b){return a.currentTime - b.currentTime});
        $currentGame.currentTurn =0
       // currentGame.set($currentGame)
        finish=true

        if($currentGame.currentStage >= $currentGame.totalStages) {
            console.log("CARRERA ACABADA")
            $currentGame.finish =true
        }


    }


    function handleClickEdit(cyclist) {
     
        let a = showAlert({
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
          },
          {
            label: 'No llegó aun',
            type: 'radio',
            value: 'back'
          }
          
        ]
      })

      console.log(a)

        return
      
    }


    function handleClickNextStage() {

        $currentGame.currentStage++

        //Update Tiempos
        $currentGame.cyclistsFinish.map(c=>{
            c.generalTime+= c.currentTime
            c.generalFatiga = c.fatiga
            c.awards.mountainPoints += c.awards.mountainPointsCurrent
            c.awards.sprintPoints += c.awards.sprintPointsCurrent

        })


        $currentGame.cyclistsFinish.map((c,i)=>{
            switch (i) {
                case 0:
                    c.awards.firstInStage++
                    break;
                case 1:
                    c.awards.secondInStage++
                    break;
                case 2:
                    c.awards.thirdInStage++
                    break
                }
            
        })

        $currentGame.cyclists = $currentGame.cyclistsFinish
        $currentGame.cyclistsInRace =  $currentGame.cyclistsFinish
        $currentGame.cyclistsFinish = []
        $currentGame.cyclists.sort(function(a, b){return a.currentTime - b.currentTime});
        $currentGame.cyclists= [...  $currentGame.cyclists]
        $currentGame.teams= updateTeams()
       
    }


    const updateTeams= ()=>{
        $currentGame.teams.map(t=>{
        
        t.awards.firstInStage =0
        t.awards.secondInStage =0
        t.awards.thirdInStage =0
        t.awards.mountainPoints=0
        t.awards.sprintPoints=0
        t.awards.total=0

        $currentGame.cyclists.map(c=>{
        //console.log(c)
        if(c.team!=t.id) return
        t.awards.firstInStage +=c.awards.firstInStage
        t.awards.secondInStage +=c.awards.secondInStage
        t.awards.thirdInStage +=c.awards.thirdInStage
        t.awards.mountainPoints+=c.awards.mountainPoints
        t.awards.sprintPoints+=c.awards.sprintPoints
        })
        console.log(t)
        t.awards.total+=(t.awards.firstInStage*3)
        t.awards.total+=(t.awards.secondInStage*2)
        t.awards.total+=(t.awards.thirdInStage*1)


        })

        $currentGame.teams.sort(function(a, b){return b.awards.total - a.awards.total});
        return  $currentGame.teams
    }


    function finishRace()
    {
        handleClickNextStage();
        if($currentGame.currentStage > $currentGame.totalStages ){
            selectTab($ionTabBarElementCurrent,"general-ranking")
            updateTabs($myTabs,"stage",false)
            $myTabs = [... $myTabs]
        }


    }

    function handleOk(e,cyclist){

        if(e=="back"){
        $currentGame.cyclistsFinish = $currentGame.cyclistsFinish.filter(c => c.id !== cyclist.id)
        cyclist.currentCalculo = false;
        $currentGame.cyclistsInRace = [... $currentGame.cyclistsInRace, cyclist];
        return
        }

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

   
        cyclist.currentPosition =  e
        $currentGame.cyclistsFinish = [... $currentGame.cyclistsFinish];

        console.log(e)
        console.log($currentGame.cyclistsFinish)

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
    <ion-row><ion-col><h1>En Linea de Meta</h1></ion-col></ion-row>
        {#each $currentGame.cyclistsFinish as cyclist,i}
        <ion-row class="ion-align-items-center ">     
            <ion-col size="2"><ion-img class="cyclist-rounded inlay-circle" src={$baseURL+"assets/cyclists/"+cyclist.image} /></ion-col>
            <ion-col class="" size="7">
                {#if cyclist.currentCalculo == false} <span style={"color:"+$currentGame.teams.find(t=> t.id ==cyclist.team).color}>{i+1}.</span>{/if}
                <span>{cyclist.name}</span> <br/> 
                {#if cyclist.currentCalculo == true}
                    <span class="subtitle">Tiempo calculado al finalizar la ronda.</span><br>
                    {#if $currentGame.modeMountain} ( <span class="subtitle">{cyclist.awards.mountainPointsCurrent} <ion-icon style=" fill:white;" slot="end" src={$baseURL+"assets/icons/"+"maillot_mountain.svg"} /> </span> ){/if}
                    {#if $currentGame.modeSprint} ( <span class="subtitle">{cyclist.awards.sprintPointsCurrent} <ion-icon color="green"  slot="end" style="" src={$baseURL+"assets/icons/"+"maillot_yellow.svg"} /> </span> ){/if}

                {:else if cyclist.currentCalculo == false} 
                {#if i==0 } 
                <span class="subtitle">Ganador de la etapa</span>   
                {:else}
                <span class="subtitle">+{fancyTimeFormat(cyclist.currentTime)}</span>  
                {/if}
                {/if}
                {#if $currentGame.guardarFatiga==true }
                <br>
                <span style={"font-size:0.45rem;font-weight:bold"} class="subtitle">Guardadados {cyclist.fatiga} x
                 <ion-icon style={"font-size:0.7rem"} slot="end" icon={journal} color="danger" /> 
                 para la proxima etapa. 
                </span>   

                {/if}
            </ion-col>
            <ion-col size="3" class="center">
            {#if cyclist.currentCalculo == true}
           <ion-button color="brown" on:click={()=> handleClickEdit(cyclist)} size="small">{cyclist.currentPosition}<ion-icon slot="end" icon={pencil} ></ion-icon></ion-button>
            {:else}
                {#if i==0 } 
                <span><ion-icon slot="end" icon={trophy} color="gold" /></span>   
                {:else if i==1}
                <span><ion-icon slot="end" icon={trophy} color="silver" /></span>   
                {:else if i==2}
                <span><ion-icon slot="end" icon={trophy} color="bronze"  /></span>   
                {/if}
            {/if}
        </ion-col>
            <hr/>
        </ion-row>
        {/each}
    
        {#if $currentGame.cyclistsInRace.length == 0 && finish==false && $currentGame.finish==false   }   
        <ion-row class="ion-align-items-center  ">         
            <ion-col size="2"></ion-col>
            <ion-col size="8"><ion-button on:click={()=> handleClickFinishStage()} expand="block" color="brown"  ><ion-icon slot="start" icon={flag}/> Fin de la Etapa</ion-button></ion-col>
            <ion-col size="2"></ion-col>
        </ion-row>
        {:else if  $currentGame.cyclistsInRace.length > 0 && $currentGame.finish==false }
        <ion-row class="ion-align-items-center  ">         
            <ion-col size="2"></ion-col>
            <ion-col size="8"><ion-button on:click={()=> handleClickNextTurn()} expand="block" color="brown" ><ion-icon slot="start" icon={repeat}/> Siguiente Turno</ion-button></ion-col>
            <ion-col size="2"></ion-col>
        </ion-row>
        {:else if finish==true && $currentGame.currentStage < $currentGame.totalStages && $currentGame.finish==false  }
        <ion-row class="ion-align-items-center  ">         
            <ion-col size="2"></ion-col>
            <ion-col size="8"><ion-button on:click={()=> handleClickNextStage()} expand="block" color="brown"  ><ion-icon slot="start" icon={arrowForward}/> Iniciar Etapa siguiente</ion-button></ion-col>
            <ion-col size="2"></ion-col>
        </ion-row>
        {:else if $currentGame.finish==true   }
        <ion-row class="ion-align-items-center  ">         
            <ion-col size="2"></ion-col>
            <ion-col size="8"><ion-button on:click={()=> finishRace()  } expand="block"  color="brown" ><ion-icon slot="start" icon={arrowForward}/>Terminar Carrera</ion-button></ion-col>
            <ion-col size="2"></ion-col>
        </ion-row>
        {/if}


</div>



  <style>






 

  </style>
  