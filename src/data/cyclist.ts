let cyclist = []
let dataCyclists:Array<any>= [
    { id: "sprinter_red", name: 'Sprinter Rojo', team: 'red_team' ,image:"RedSprinteur.jpg"},
    { id: "rouler_red", name: 'Rodador Rojo', team: 'red_team',image:"RedRouleur.jpg"},
    { id: "sprinter_blue", name: 'Sprinter Azul', team: 'blue_team' ,image:"BlueSprinteur.jpg"},
    { id: "rouler_blue", name: 'Rodador Azul', team: 'blue_team',image:"BlueRouleur.jpg"},
    { id: "sprinter_green", name: 'Sprinter Verde', team: 'green_team' ,image:"GreenSprinteur.jpg"},
    { id: "rouler_green", name: 'Rodador Verde', team: 'green_team',image:"GreenRouleur.jpg"},
    { id: "sprinter_black", name: 'Sprinter Negro', team: 'black_team' ,image:"BlackSprinteur.jpg"},
    { id: "rouler_black", name: 'Rodador Negro', team: 'black_team',image:"BlackRouleur.jpg"},
    { id: "sprinter_pink", name: 'Sprinter Rosa', team: 'pink_team' ,image:"PinkSprinteur.jpg"},
    { id: "rouler_pink", name: 'Rodador Rosa', team: 'pink_team',image:"PinkRouleur.jpg"},
    { id: "sprinter_white", name: 'Sprinter Blanco', team: 'white_team' ,image:"WhiteSprinteur.jpg"},
    { id: "rouler_white", name: 'Rodador Blanco', team: 'white_team',image:"WhiteRouleur.jpg"},

  ];

  dataCyclists.map(c=>{
    c["awards"] = {firstInStage:0,secondInStage:0,thirdInStage:0,mountainPoints:0,sprintPoints:0,mountainPointsCurrent:0,sprintPointsCurrent:0}
    c= {...c, currentTurn:0 ,currentTime:0,generalTime:0,currentPosition:0,currentCalculo:false,fatiga:0,generalFatiga:0,  }
    cyclist.push(c)
})


export {cyclist}
