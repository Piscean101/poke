import { boyName, girlName, lastName, RandomName, RandomNumber, Sample } from '../data/name.js';
import { pokedex, searchDex } from '../data/pokedex.js';
import { items } from '../data/items.js';
import { allItems, addToInventory, removeFromInventory, moveMoney } from './shop.js';

const nextEncounterButton = document.getElementById("nextEncounterButton");
const encounterDisplay = document.getElementById("encounter");
const body = document.querySelector("body");
const inventory = localStorage.getItem("playerInventory");
var newHeader = document.createElement("h1");
const newEncounterImg = new Image();
newEncounterImg.classList.add('newEncounterImg');
// encounterDisplay.appendChild(newEncounterImg);
newHeader.classList.add('encounterHeader','hidden');

body.appendChild(newHeader);

const ballInventory = () => {

    var filter = inventory.split(',').filter((e) => { return e.split(' ')[1] == 'Ball'}).filter((e) => { return e != 'Cherish Ball' });

    return filter.sort();

}

const displayPokeBalls = ([...ballRoster]) => {

    const rosterHolder = document.createElement("div");
    rosterHolder.id = "rosterHolder";
    rosterHolder.classList.add("tempEncounterUI");

    ballRoster.forEach((e) => {
        const newImg = document.createElement("img");
        newImg.classList.add("catchItemImg");
        newImg.src = [...Object.values(items['PokeBalls'])].filter((f) => { return f.NAME == e })[0].URL;
        rosterHolder.appendChild(newImg);
        newImg.addEventListener("click", (ball) => {

        })
    })
    
    body.appendChild(rosterHolder);

}

const firstNames = [...boyName,...girlName];

const handleCatch = (mon,ball) => {}

const nextEncounter = ([...encounter]) => {

    const tempUIList = document.querySelectorAll(".tempEncounterUI");
    const name = encounter[1].toLowerCase();
    newEncounterImg.src = '../../../data/images/transparent.png';

    tempUIList.forEach((e) => {
        body.removeChild(e);
    })

    newHeader.classList.remove('hidden');

    switch (encounter[0]) {
        case 'Catch':
            newEncounterImg.addEventListener('error', (e) => { 
                e.target.src=`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`
            });
            newEncounterImg.src = `https://img.pokemondb.net/sprites/diamond-pearl/normal/${name}.png`;
            encounterDisplay.appendChild(newEncounterImg);
            displayPokeBalls(ballInventory());
            newHeader.innerHTML = `A wild ${encounter[1]} appeared!`;
            break;
        case 'Trainer':
            newHeader.innerHTML = `${encounter[1]} challenged you to a battle!`;
            break;
        case 'Item':
            newHeader.innerHTML = `You found an item!`;
            break;
        default: break;
    }

    setTimeout(() => { newHeader.classList.add('hidden') }, 2000)

}

const handleEncounter = (type,obj) => {
}

var pokes = [...Object.values(pokedex)];

export const rosterGroups = {
    'Youngster': [],
    'Schoolkid': [],
    'Bug Catcher': [],
    'Bug Collector': [],
    'Rookie Trainer': [],
    'Hiker': [],
    'Trainer': [],
    'Jogger': [],
    'Scientist:': [],
    'Explorer': [],
    'Rocket Grunt': [],
    'Camper': [],
    'Pokémaniac': [],
    'Tourist': [],
    'Challenger': [],
    'Burglar': [],
    'Bird Watcher': [],
    'Cyclist': [],
    'Explorer': [],
    'Worker': []
}

const biomes = {
    'Route 1': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')], 
    'Route 2': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Tyrogue')[0]),
    'Viridian Forest': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Pikachu')[0]),
    'Route 3': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Flying')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Poliwag')[0]),
    'Mount Moon': [...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Rock')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Ground')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Clefairy')[0]),
    'Route 4': [...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Flying')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Fire')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY != 'N')]).concat(searchDex('NAME','Drowzee')[0]),
    'Dark Cave': [...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Dark')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Rock')).filter(e => e[1].RARITY != 'N')]).concat(searchDex('NAME','Machop')[0]).filter(e => { return !e[1].TYPE.includes('Water') && !e[1].TYPE.includes('Grass') }),
}


export const encounterGroups = {
    //   AVOID PLACING ITEMS/RANDOM NEAR BEGINNING OF ROUTE TO AVOID REFRESH ABUSE
    'Route 1': {
        Trainer: ['Youngster','Schoolkid'],
        Catch: biomes['Route 1'],
        Item: ['Poké Ball','Nest Ball','Potion'],
        Path: ['Catch','Trainer','Catch','Item','Trainer'],
        Difficulty: 1
    },
    'Route 2': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer'],
        Catch: biomes['Route 2'],
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball'],
        Path: ['Trainer','Catch','Item','Random','Trainer'],
        Difficulty: 1
    },
    'Viridian Forest': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer','Bug Collector'],
        Catch: biomes['Viridian Forest'],
        Item: ['Poké Ball','Potion','Nest Ball','Super Potion','Net Ball'],
        Path: ['Catch','Trainer','Catch','Random','Catch','Trainer','Item'],
        Difficulty: 2
    },
    'Route 3': {
        Trainer: ['Youngster','Bug Collector','Rookie Trainer','Hiker','Trainer','Jogger'],
        Catch: biomes['Route 3'],
        Item: ['Poké Ball','Potion','Nest Ball','Great Ball','Super Potion','Revive','Dive Ball','Leaf Stone'],
        Path: ['Trainer','Catch','Random','Trainer','Random','Random','Item','Trainer'],
        Difficulty: 2
    },
    'Mount Moon': {
        Trainer: ['Hiker','Trainer','Jogger','Scientist','Explorer','Rocket Grunt','Camper','Pokémaniac','Tourist'],
        Catch: biomes['Mount Moon'].concat(biomes['Route 2']),
        Item: ['Poké Ball','Potion','Nest Ball','Dusk Ball','Net Ball','Great Ball','Super Potion','Revive','Rare Candy','Moon Stone','Metal Coat'],
        Path: ['Catch','Catch','Random','Trainer','Catch','Catch','Random','Trainer','Item'],
        Difficulty: 2
    },
    'Route 4': {
        Trainer: ['Hiker','Trainer','Jogger','Rocket Grunt','Camper','Pokémaniac','Police Officer','Burglar','Challenger','Cyclist','Bird Watcher'],
        Catch: biomes['Route 4'].concat(biomes['Route 3']),
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball','Great Ball','Ultra Ball','Dream Ball','Super Potion','Revive','Premier Ball','Rare Candy','Moon Stone','Hyper Potion','Leaf Stone'],
        Path: ['Catch','Trainer','Trainer','Random','Catch','Trainer','Catch','Item','Random','Trainer'],
        Difficulty: 3
    },
    'Dark Cave': {
        Trainer: ['Trainer','Rocket Grunt','Camper','Pokémaniac','Burglar','Challenger','Explorer','Worker','Scientist'],
        Catch: biomes['Dark Cave'],
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball','Dusk Ball','Coin Case','Great Ball','Ultra Ball','Dream Ball','Super Potion','Revive','Premier Ball','Rare Candy','Moon Stone','Hyper Potion','Dusk Stone',`King's Rock`],
        Path: ['Catch','Catch','Random','Trainer','Catch','Trainer','Catch','Item','Random','Catch'],
        Difficulty: 3
    },
}

export class EncounterTable {
    constructor(name='Route 1') {

        this.encounterGroup = encounterGroups[name];

        this.nextEncounter = () => {}

        console.log(`${name}: ${this.encounterGroup['Catch'].length} encounters`,this.encounterGroup['Catch'].map(e => e[1].NAME))

        this.encounterTable = this.encounterGroup['Path'].map((e,i) => {
            let result; let x;
            switch(e) {
                case 'Catch':
                    result = ['Catch',RandomName(this.encounterGroup['Catch'])];
                    break;
                case 'Item':
                    result = ['Item',RandomName(this.encounterGroup['Item'])];
                    break;
                case 'Trainer':
                    result = ['Trainer',RandomName(this.encounterGroup['Trainer']) + ' ' + RandomName(firstNames)];
                    break;
                case 'Random':
                    x = Math.random()*3;
                    x <= 1 ? result = ['Catch',RandomName(this.encounterGroup['Catch'])] : x <= 2 ? result = ['Item',RandomName(this.encounterGroup['Item'])] : x <= 3 ? result = ['Trainer',RandomName(this.encounterGroup['Trainer']) + ' ' + RandomName(firstNames)] : null;
                    break;
                default: break;
            }
            return result;
        });

        this.rawEncounterTable = this.encounterTable.map((e) => { 
            let result = e;
            if (typeof e[1] == 'object') {
                result = ['Catch',e[1][1].NAME];
            }
            return result;
        });

        this.encounterMap = new Set();

        this.nextEncounter = () => {
            this.rawEncounterTable.length ? nextEncounter(this.rawEncounterTable.shift()) : console.log("Route Complete!")
        }

        nextEncounterButton.addEventListener("click", (e) => {
            this.nextEncounter();
        })

        console.log(...this.rawEncounterTable);

    }
}