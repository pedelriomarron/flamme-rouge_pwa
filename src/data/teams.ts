let teams = []
let dataTeams = [
    { id: "red_team", expansion: "base", name: 'Equipo Rojo', color: '#DB5061', image: "red_team.png" },
    { id: "blue_team", expansion: "base", name: 'Equipo Azul', color: '#356B89', image: "blue_team.png" },
    { id: "green_team", expansion: "base", name: 'Equipo Verde', color: '#427E4A', image: "green_team.png" },
    { id: "black_team", expansion: "base", name: 'Equipo Negro', color: '#2D2834', image: "black_team.png" },
    { id: "pink_team", expansion: "peloton", name: 'Equipo Rosa', color: '#F4BFD9', image: "pink_team.png" },
    { id: "white_team", expansion: "peloton", name: 'Equipo Blanco', color: '#F7FFFC', image: "white_team.png" },
]

dataTeams.map(t=>{
    t["awards"] =  { firstInStage: 0, secondInStage: 0, thirdInStage: 0, mountainPoints: 0, sprintPoints: 0, total: 0 } 
    teams.push(t)
})


export {teams}