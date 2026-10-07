import { battleScreen, encounterDisplay } from "./encounters.js";
import { pokedex } from "../data/pokedex.js";

console.log([...Object.entries(pokedex)])

const playerMap = []
const enemyMap = []

export const startBattle = (enemy,team=localStorage.getItem("teamStatus")) => {
    encounterDisplay.classList.add("hidden");
    var roster = localStorage.getItem("playerRoster").split(',');
    var rosterNames = roster.map(e => e = e.split('/')[6].split('.')[0]);
    const playerBattleRoster = document.createElement("div");
    const enemyBattleRoster = document.createElement("div");
    const playerStage = document.createElement("div");
    const enemyStage = document.createElement("div");

    rosterNames.forEach((e) => {
        var mon = {
            NAME: '',
            HP: 0,
        }
        mon.NAME = pokedex[1][1].NAME;
        mon.NAME = pokedex.filter((poke) => { return poke[1].NAME.toLowerCase() == e})[0][1].NAME;
        mon.HP = pokedex.filter((poke) => { return poke[1].NAME.toLowerCase() == e})[0][1].HP;
        playerMap.push(mon);
    })

    console.log(rosterNames,playerMap);

    var count = 0;
    while (count < 12) {
        const pokePartyHolder = document.createElement("img");
        pokePartyHolder.classList.add("pokePartyHolder");
        if (count < 6) {
            if (roster[count]) { pokePartyHolder.src = roster[count]; pokePartyHolder.classList.add("optionPoke") };
            playerBattleRoster.appendChild(pokePartyHolder) 
        } else {
            enemyBattleRoster.appendChild(pokePartyHolder);
        }
        count++;
    }

    // console.log(localStorage.getItem("playerRoster"),localStorage.getItem("teamStatus"))
    
    playerBattleRoster.classList.add("playerBattleRoster","battleScreenSection");
    enemyBattleRoster.classList.add("enemyBattleRoster","battleScreenSection");
    playerStage.classList.add("playerStage","battleScreenSection");
    enemyStage.classList.add("enemyStage","battleScreenSection");

    battleScreen.appendChild(playerBattleRoster);
    battleScreen.appendChild(enemyBattleRoster);
    battleScreen.appendChild(playerStage);
    battleScreen.appendChild(enemyStage);
    battleScreen.classList.remove("hidden");
}

export const resolveBattle = () => {
    var teamStatus; localStorage.setItem("teamStatus");
    battleScreen.classList.add("hidden");
}