import { _ } from 'svelte-i18n'
import { get } from 'svelte/store'



function generateCyclist(){

let cyclist = []
let dataCyclists:Array<any>= [
    { id: "sprinter_red", name: `${get(_)("SPRINTER")} ${get(_)("RED")}`, team: 'red_team' ,image:"RedSprinteur.jpg"},
    { id: "rouler_red", name: `${get(_)("ROULER")} ${get(_)("RED")}`, team: 'red_team',image:"RedRouleur.jpg"},
    { id: "sprinter_blue", name: `${get(_)("SPRINTER")} ${get(_)("BLUE")}`, team: 'blue_team' ,image:"BlueSprinteur.jpg"},
    { id: "rouler_blue", name: `${get(_)("ROULER")} ${get(_)("BLUE")}`, team: 'blue_team',image:"BlueRouleur.jpg"},
    { id: "sprinter_green", name: `${get(_)("SPRINTER")} ${get(_)("GREEN")}`, team: 'green_team' ,image:"GreenSprinteur.jpg"},
    { id: "rouler_green", name: `${get(_)("ROULER")} ${get(_)("GREEN")}`, team: 'green_team',image:"GreenRouleur.jpg"},
    { id: "sprinter_black", name: `${get(_)("SPRINTER")} ${get(_)("BLACK")}`, team: 'black_team' ,image:"BlackSprinteur.jpg"},
    { id: "rouler_black", name:`${get(_)("ROULER")} ${get(_)("BLACK")}`, team: 'black_team',image:"BlackRouleur.jpg"},
    { id: "sprinter_pink", name:`${get(_)("SPRINTER")} ${get(_)("PINK")}`, team: 'pink_team' ,image:"PinkSprinteur.jpg"},
    { id: "rouler_pink", name: `${get(_)("ROULER")} ${get(_)("PINK")}`, team: 'pink_team',image:"PinkRouleur.jpg"},
    { id: "sprinter_white", name: `${get(_)("SPRINTER")} ${get(_)("WHITE")}`, team: 'white_team' ,image:"WhiteSprinteur.jpg"},
    { id: "rouler_white", name: `${get(_)("ROULER")} ${get(_)("WHITE")}`, team: 'white_team',image:"WhiteRouleur.jpg"},

  ];

  dataCyclists.map(c=>{
    c["awards"] = {firstInStage:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0}
    c= {...c, currentTurn:0 ,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false,fatiga:0,generalFatiga:0,  }
    cyclist.push(c)
})
return cyclist

}


export {generateCyclist}