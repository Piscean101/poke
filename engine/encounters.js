import { boyName, girlName, lastName, RandomName, RandomNumber, Sample } from '../data/name.js';
import { pokedex, searchDex } from '../data/pokedex.js';
import { items } from '../data/items.js';
import { allItems, addToInventory, moveMoney } from './shop.js';

const firstNames = [...boyName,...girlName];

const handleCatch = (mon,ball) => {}

const nextEncounter = () => {

}

const handleEncounter = () => {
}

var pokes = [...Object.values(pokedex)];

export const rosterGroups = {
    'Youngster': [],
    'Schoolkid': [],
    'Bug Catcher': [],
    'Bug Collector': [],
    'Rookie Trainer': [],
    'Hiker': [],
}

const biomes = {
    'Route 1': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')], 
    'Route 2': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY == 'C')]),
    'Viridian Forest': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Pikachu')[0]),
    'Route 3': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Flying')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Poliwag')[0]),
}


export const encounterGroups = {
    'Route 1': {
        Trainer: ['Youngster','Schoolkid'],
        Catch: biomes['Route 1'],
        Item: ['Poké Ball','Potion'],
        Path: ['Catch','Random','Item','Trainer'],
        Difficulty: 1
    },
    'Route 2': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer'],
        Catch: biomes['Route 2'],
        Item: ['Poké Ball','Potion','Nest Ball'],
        Path: ['Catch','Catch','Item','Trainer','Random','Catch','Trainer'],
        Difficulty: 1
    },
    'Viridian Forest': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer','Bug Collector'],
        Catch: biomes['Viridian Forest'],
        Item: ['Poké Ball','Potion','Nest Ball','Super Potion'],
        Path: ['Catch','Catch','Item','Trainer','Random','Catch','Trainer'],
        Difficulty: 1
    },
    'Route 3': {
        Trainer: ['Youngster','Bug Collector','Rookie Trainer','Hiker','Challenger'],
        Catch: biomes['Route 3'],
        Item: ['Poké Ball','Potion','Nest Ball','Great Ball','Super Potion','Revive'],
        Path: ['Catch','Catch','Item','Trainer','Random','Catch','Trainer'],
        Difficulty: 1
    },
}

export class EncounterTable {
    constructor(name='Route 1',size=7) {
        // this.encounterTable = encounterGroups[name];
        // this.routeName = document.title.split(':')[1].replace(' ','');
        this.encounterGroup = encounterGroups[name];

        console.log(`${name}: ${this.encounterGroup['Catch'].length} encounters`,this.encounterGroup['Catch'].map(e => e[1].NAME))

        this.encounterTable = this.encounterGroup['Path'].map((e,i) => {
            let result; let x;
            switch(e) {
                case 'Catch':
                    result = RandomName(this.encounterGroup['Catch']);
                    break;
                case 'Item':
                    result = RandomName(this.encounterGroup['Item']);
                    break;
                case 'Trainer':
                    result = RandomName(this.encounterGroup['Trainer']) + ' ' + RandomName(firstNames);
                    break;
                case 'Random':
                    x = Math.random()*3;
                    x <= 1 ? result = RandomName(this.encounterGroup['Catch']) : x <= 2 ? result = RandomName(this.encounterGroup['Item']) : x <= 3 ? result = RandomName(this.encounterGroup['Trainer']) + ' ' + RandomName(firstNames) : null;
                    break;
                default: break;
            }
            return result;
        });

        this.rawEncounterTable = this.encounterTable.map((e) => { 
            let result = e;
            if (typeof e == 'object') {
                result = e[1].NAME;
            }
            return result;
        })

        this.encounterMap = new Set();

        // this.rawEncounterTable.forEach((e) => {
        //     this.encounterMap.add(e);
        // })

        console.log(this.rawEncounterTable);
    }
}