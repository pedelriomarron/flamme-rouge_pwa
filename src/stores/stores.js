import { writable } from 'svelte/store'

const currentGame = writable({ teams: [], totalStages: 0, currentStage: 1, ok: false, cyclists: [], cyclistsInRace: [], cyclistsFinish: [], currentTurn: 0, currentPositionWinner: 0, finish: false, modeMountain: false, modeSprint: false, guardarFatiga: false, confirmarNuevoTurno: false })
const selectedCurrentTeams = writable([])
const selectedStages = writable(2)
const ionTabBarElementCurrent = writable()
const myTabs = writable([])
const settingsStore = writable({ modeMountain: false, modeSprint: false, guardarFatiga: false, confirmarNuevoTurno: false })
const partidasGuardadas = writable(0)


const defaultTeams = writable([
    { id: "red_team", name: 'Equipo Rojo', color: '#DB5061', image: "red_team.png", awards: { stageWin: 0, secondInStage: 0, thirdInStage: 0, mountainPoints: 0, sprintPoints: 0, total: 0 } },
    { id: "blue_team", name: 'Equipo Azul', color: '#356B89', image: "blue_team.png", awards: { stageWin: 0, secondInStage: 0, thirdInStage: 0, mountainPoints: 0, sprintPoints: 0, total: 0 } },
    { id: "green_team", name: 'Equipo Verde', color: '#427E4A', image: "green_team.png", awards: { stageWin: 0, secondInStage: 0, thirdInStage: 0, mountainPoints: 0, sprintPoints: 0, total: 0 } },
    { id: "black_team", name: 'Equipo Negro', color: '#2D2834', image: "black_team.png", awards: { stageWin: 0, secondInStage: 0, thirdInStage: 0, mountainPoints: 0, sprintPoints: 0, total: 0 } },
])



export { currentGame, selectedCurrentTeams, selectedStages, ionTabBarElementCurrent, defaultTeams, myTabs, settingsStore, partidasGuardadas }