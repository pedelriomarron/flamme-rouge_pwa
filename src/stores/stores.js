import { writable } from 'svelte/store'

const currentGame = writable({ teams: [], totalStages: 0, currentStage: 1, ok: false, cyclists: [], cyclistsInRace: [], cyclistsFinish: [], currentTurn: 0, currentPositionWinner: 0, finish: false, modeMountain: false, modeSprint: false, guardarFatiga: false, confirmarNuevoTurno: false })
const selectedCurrentTeams = writable([])
const selectedStages = writable(2)
const ionTabBarElementCurrent = writable()
const myTabs = writable([])
const settingsStore = writable({ modeMountain: false, modeSprint: false, guardarFatiga: false, confirmarNuevoTurno: false, expansion_peloton: false, expansion_base: true })
const partidasGuardadas = writable(0)
const baseURL = writable("")

const defaultTeams = writable([])





export { currentGame, selectedCurrentTeams, selectedStages, ionTabBarElementCurrent, defaultTeams, myTabs, settingsStore, partidasGuardadas, baseURL }