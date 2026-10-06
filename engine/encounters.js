import { boyName, girlName, lastName, RandomName, RandomNumber, Sample } from '../data/name.js';
import { pokedex, searchDex } from '../data/pokedex.js';
import { items } from '../data/items.js';
import { allItems, addToInventory, removeFromInventory, moveMoney } from './shop.js';
import { placeInPC } from './profile.js';


const nextEncounterButton = document.getElementById("nextEncounterButton");
const encounterDisplay = document.getElementById("encounter");
const body = document.querySelector("body");
const inventory = localStorage.getItem("playerInventory");
var newHeader = document.createElement("h1");
var battleScreen = document.createElement("div");
const newEncounterImg = new Image();
const exploreRoute = localStorage.getItem("currentRoute");
newEncounterImg.classList.add('newEncounterImg');
// encounterDisplay.appendChild(newEncounterImg);
newHeader.classList.add('encounterHeader','hidden');

body.appendChild(newHeader);
body.appendChild(battleScreen);

const rarityTable = {
    C: 10,
    U: 0,
    R: -2,
    X: -5,
    M: -7,
    L: -9,
    N: -100
}

const gameMessage = (msg) => {

    newHeader.classList.remove('hidden');

    newHeader.innerHTML = msg;

    setTimeout(() => { newHeader.classList.add('hidden') }, 2000);

}

const ballInventory = () => {

    const tempInv = localStorage.getItem("playerInventory");

    var filter = tempInv.split(',').filter((e) => { return e.split(' ')[1] == 'Ball'}).filter((e) => { return e != 'Cherish Ball' });

    return filter.sort();

}

const checkBallBonus = (ball,mon,route=exploreRoute) => {
    var result = 0;
    return result;
}

const calcCatch = (ball,mon) => {
    var result = false;
    const ballData = [...Object.entries(items['PokeBalls'])].filter((e) => { return e[1].NAME == ball})[0][1];
    const monData = [...Object.entries(pokedex)].filter((e) => { return e[1][1].NAME == mon})[0][1][1];
    var ballRate = ballData['RATE'][0]; var rarity = rarityTable[monData.RARITY];
    const bonus = checkBallBonus(ball,mon);
    var catchRate = ballRate + rarity + bonus;
    var checkRoll = Math.floor(Math.random()*100);
    checkRoll <= catchRate ? result = true : null;
    console.log(`${ball}: ${ballRate}`,`${mon}: ${rarity}`,`Bonus: ${bonus}`,`Total: ${catchRate}`,checkRoll)
    return result;
}

const handleCatch = (ball) => {
    const pk = newEncounterImg.src.split('/').pop().split('.').shift();
    const findPk = pokedex.filter((e) => { return e[1].NAME.toUpperCase() == pk.toUpperCase() })[0][1];
    const catchResult = calcCatch(ball,findPk.NAME);
    if(catchResult) {
        alert(`Success! You captured ${findPk.NAME}`);
        placeInPC(findPk.NAME);
        setTimeout(() => { nextEncounterButton.click() },300);
    } else {
        var flee = Math.floor(Math.random()*10);
        alert(`Oh no! ${findPk.NAME} broke free!`);
        if (flee >= 4) {
            alert(`${findPk.NAME} fled`);
            setTimeout(() => { nextEncounterButton.click() },300);
        }
    } 
}

const displayPokeBalls = ([...ballRoster]) => {

    const rosterHolder = document.createElement("div");
    rosterHolder.id = "rosterHolder";
    rosterHolder.classList.add("tempEncounterUI");

    ballRoster.forEach((e) => {
        const newImg = document.createElement("img");
        newImg.classList.add("catchItemImg");
        newImg.classList.add(e.replace(" ","_"));
        if (e == 'Poké Ball') { newImg.classList.add('pok') }
        newImg.src = [...Object.values(items['PokeBalls'])].filter((f) => { return f.NAME == e })[0].URL;
        rosterHolder.appendChild(newImg);
        newImg.addEventListener("click", (ball) => {
            // gameMessage(`Threw the ${e}`);
            handleCatch(e);
            ball.target.classList.add("hidden");
            removeFromInventory(e);
        })
    });
    
    body.appendChild(rosterHolder);

}

const firstNames = [...boyName,...girlName];

export const rosterGroups = {
    'Youngster': [
        ['https://play.pokemonshowdown.com/sprites/trainers/youngster-gen3.png',
        'https://play.pokemonshowdown.com/sprites/trainers/youngster-gen7.png',
        'https://play.pokemonshowdown.com/sprites/trainers/youngster.png'],
        []
    ],
    'Schoolkid': [
        ['https://play.pokemonshowdown.com/sprites/trainers/schoolkidf-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/schoolgirl.png'],
        []
    ],
    'Bug Catcher': [
        ['https://play.pokemonshowdown.com/sprites/trainers/bugcatcher-gen4dp.png',
            'https://play.pokemonshowdown.com/sprites/trainers/bugcatcher-gen6.png'],
        []
    ],
    'Bug Maniac': [
        ['https://play.pokemonshowdown.com/sprites/trainers/bugmaniac-gen6.png'],
        []
    ],
    'Rookie Trainer': [
        ['https://play.pokemonshowdown.com/sprites/trainers/risingstar.png',
            'https://play.pokemonshowdown.com/sprites/trainers/risingstar-gen6.png',
            'https://play.pokemonshowdown.com/sprites/trainers/camper.png',
            'https://play.pokemonshowdown.com/sprites/trainers/lass-gen6oras.png'],
        []
    ],
    'Hiker': [
        ['https://play.pokemonshowdown.com/sprites/trainers/hiker-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/hiker-gen9.png'],
        []
    ],
    'Trainer': [
        ['https://play.pokemonshowdown.com/sprites/trainers/lass-gen4dp.png',
            'https://play.pokemonshowdown.com/sprites/trainers/pokemonranger-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/smasher.png',
            'https://play.pokemonshowdown.com/sprites/trainers/yancy.png',
            'https://play.pokemonshowdown.com/sprites/trainers/victor-league.png',
            'https://play.pokemonshowdown.com/sprites/trainers/cameraman.png',
            'https://play.pokemonshowdown.com/sprites/trainers/dancer.png',
            'https://play.pokemonshowdown.com/sprites/trainers/scott.png',
            'https://play.pokemonshowdown.com/sprites/trainers/sightseerf.png',
            'https://play.pokemonshowdown.com/sprites/trainers/artist-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/emma.png',
            'https://play.pokemonshowdown.com/sprites/trainers/lass.png',
            'https://play.pokemonshowdown.com/sprites/trainers/mirror.png',
            'https://play.pokemonshowdown.com/sprites/trainers/ruffian.png'],
        []
    ],
    'Police Officer': [
        ['https://play.pokemonshowdown.com/sprites/trainers/policeman.png',
            'https://play.pokemonshowdown.com/sprites/trainers/policeman-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/policeman-gen7.png'],
        []
    ],
    'Jogger': [
        ['https://play.pokemonshowdown.com/sprites/trainers/jogger.png',
            'https://play.pokemonshowdown.com/sprites/trainers/triathleterunner-gen6.png'],
        []
    ],
    'Scientist': [
        ['https://play.pokemonshowdown.com/sprites/trainers/scientistf.png',
            'https://play.pokemonshowdown.com/sprites/trainers/scientist-gen4dp.png',
            'https://play.pokemonshowdown.com/sprites/trainers/scientistf-gen6.png'],
        []
    ],
    'Athlete': [
        ['https://play.pokemonshowdown.com/sprites/trainers/bodybuilderf-gen9.png',
            'https://play.pokemonshowdown.com/sprites/trainers/bodybuilder-gen9.png',
            'https://play.pokemonshowdown.com/sprites/trainers/striker.png',
            'https://play.pokemonshowdown.com/sprites/trainers/hoopster.png',
            'https://play.pokemonshowdown.com/sprites/trainers/linebacker.png'],
        []
    ], 
    'Explorer': [
        ['https://play.pokemonshowdown.com/sprites/trainers/colza.png',
            'https://play.pokemonshowdown.com/sprites/trainers/toddsnap2.png',
            'https://play.pokemonshowdown.com/sprites/trainers/hiker-gen7.png',
            'https://play.pokemonshowdown.com/sprites/trainers/ruinmaniac.png'],
        []
    ],
    'Rocket Grunt': [
        ['https://play.pokemonshowdown.com/sprites/trainers/rainbowrocketgrunt.png',
            'https://play.pokemonshowdown.com/sprites/trainers/rainbowrocketgruntf.png',
            'https://play.pokemonshowdown.com/sprites/trainers/rocketgrunt.png',
            'https://play.pokemonshowdown.com/sprites/trainers/rocketgruntf.png',
            'https://play.pokemonshowdown.com/sprites/trainers/teamrocketgruntf-gen3.png',
            'https://play.pokemonshowdown.com/sprites/trainers/teamrocketgruntm-gen3.png'],
        []
    ],
    // 'Camper': [
    //     [''],
    //     []
    // ],
    'Pokémaniac': [
        ['https://play.pokemonshowdown.com/sprites/trainers/pokemaniac-gen6.png',
            'https://play.pokemonshowdown.com/sprites/trainers/pokemaniac.png'],
        []
    ],
    'Tourist': [
        ['https://play.pokemonshowdown.com/sprites/trainers/touristf.png',
            'https://play.pokemonshowdown.com/sprites/trainers/tourist.png'],
        []
    ],
    'Challenger': [
        ['https://play.pokemonshowdown.com/sprites/trainers/collector-gen6.png',
            'https://play.pokemonshowdown.com/sprites/trainers/cyrus-masters.png',
            'https://play.pokemonshowdown.com/sprites/trainers/spark-casual.png',
            'https://play.pokemonshowdown.com/sprites/trainers/silver.png',
            'https://play.pokemonshowdown.com/sprites/trainers/cyrano.png',
            'https://play.pokemonshowdown.com/sprites/trainers/gambler.png',
            'https://play.pokemonshowdown.com/sprites/trainers/gentleman-gen8.png'],
        []
    ],
    'Burglar': [
        ['https://play.pokemonshowdown.com/sprites/trainers/burglar.png',
            'https://play.pokemonshowdown.com/sprites/trainers/burglar-lgpe.png',
            'https://play.pokemonshowdown.com/sprites/trainers/burglar-gen3.png'],
        []
    ],
    'Bird Keeper': [
        ['https://play.pokemonshowdown.com/sprites/trainers/birdkeeper-gen3.png',
            'https://play.pokemonshowdown.com/sprites/trainers/birdkeeper.png'],
        []
    ],
    'Cyclist': [
        ['https://play.pokemonshowdown.com/sprites/trainers/cyclistf-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/cyclist-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/cyclist.png'],
        []
    ],
    'Worker': [
        ['https://play.pokemonshowdown.com/sprites/trainers/worker.png',
            'https://play.pokemonshowdown.com/sprites/trainers/worker-gen4.png',
            'https://play.pokemonshowdown.com/sprites/trainers/worker-gen6.png',
            'https://play.pokemonshowdown.com/sprites/trainers/ruinmaniac-gen3.png'],
        []
    ],
    'Professor': [
        ['https://play.pokemonshowdown.com/sprites/trainers/sycamore.png',
            'https://play.pokemonshowdown.com/sprites/trainers/elm.png'],
        []
    ],
    'Beauty': [
        ['https://play.pokemonshowdown.com/sprites/trainers/beauty.png',
            'https://play.pokemonshowdown.com/sprites/trainers/beauty-gen4dp.png',
            'https://play.pokemonshowdown.com/sprites/trainers/beauty-gen7.png',
            'https://play.pokemonshowdown.com/sprites/trainers/beauty-gen8.png'],
        []
    ],
    'Ninja': [
        ['https://play.pokemonshowdown.com/sprites/trainers/shadowtriad.png'],
        []
    ]
}

const biomes = {
    'Route 1': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')], 
    'Route 2': [...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY == 'C')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Tyrogue')[0]),
    'Viridian Forest': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Bug')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Pikachu')[0]),
    'Route 3': [...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Grass')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Flying')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Poliwag')[0]),
    'Mount Moon': [...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Rock')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',5,'-')[0].filter(e => e[1].TYPE.includes('Ground')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY == 'C')]).concat(searchDex('NAME','Clefairy')[0]).filter(e => { return !e[1].TYPE.includes('Water')}),
    'Route 4': [...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Flying')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',6,'-')[0].filter(e => e[1].TYPE.includes('Fire')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Normal')).filter(e => e[1].RARITY != 'N')]).concat(searchDex('NAME','Drowzee')[0]),
    'Dark Cave': [...searchDex('TOTAL',9,'-')[0].filter(e => e[1].TYPE.includes('Dark')).filter(e => e[1].RARITY != 'N')].concat([...searchDex('TOTAL',8,'-')[0].filter(e => e[1].TYPE.includes('Poison')).filter(e => e[1].RARITY != 'N')]).concat([...searchDex('TOTAL',7,'-')[0].filter(e => e[1].TYPE.includes('Rock')).filter(e => e[1].RARITY != 'N')]).concat(searchDex('NAME','Machop')[0]).filter(e => { return !e[1].TYPE.includes('Water') && !e[1].TYPE.includes('Grass') }),
}


export const encounterGroups = {
    //   AVOID PLACING ITEMS/RANDOM NEAR BEGINNING OF ROUTE AND AT VERY THE LAST ENCOUNTER
    // AVOID PLACING ITEMS/RANDOM TOGETHER SIMULTANEOUSLY
    'Route 1': {
        Trainer: ['Youngster','Schoolkid'],
        Catch: biomes['Route 1'],
        Item: ['Poké Ball','Nest Ball','Potion'],
        Path: ['Catch','Trainer','Catch','Item','Trainer'],
        Difficulty: 1
    },
    'Route 2': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer','Schoolkid'],
        Catch: biomes['Route 2'],
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball'],
        Path: ['Trainer','Catch','Trainer','Catch','Item','Trainer'],
        Difficulty: 1
    },
    'Viridian Forest': {
        Trainer: ['Youngster','Bug Catcher','Rookie Trainer','Bug Maniac'],
        Catch: biomes['Viridian Forest'],
        Item: ['Poké Ball','Potion','Nest Ball','Super Potion','Net Ball'],
        Path: ['Catch','Trainer','Random','Catch','Random','Trainer','Catch','Item','Trainer'],
        Difficulty: 2
    },
    'Route 3': {
        Trainer: ['Youngster','Bug Maniac','Rookie Trainer','Hiker','Trainer','Jogger'],
        Catch: biomes['Route 3'],
        Item: ['Poké Ball','Potion','Nest Ball','Great Ball','Super Potion','Revive','Dive Ball','Leaf Stone'],
        Path: ['Trainer','Trainer','Catch','Item','Catch','Trainer','Catch','Random','Trainer'],
        Difficulty: 2
    },
    'Mount Moon': {
        Trainer: ['Hiker','Trainer','Jogger','Scientist','Explorer','Rocket Grunt','Pokémaniac','Tourist','Worker','Police Officer'],
        Catch: biomes['Mount Moon'].concat(biomes['Route 2']),
        Item: ['Poké Ball','Potion','Nest Ball','Dusk Ball','Net Ball','Great Ball','Super Potion','Revive','Rare Candy','Moon Stone','Metal Coat'],
        Path: ['Catch','Catch','Random','Trainer','Catch','Catch','Random','Trainer','Item','Catch','Trainer'],
        Difficulty: 2
    },
    'Route 4': {
        Trainer: ['Hiker','Trainer','Jogger','Rocket Grunt','Pokémaniac','Police Officer','Burglar','Challenger','Cyclist','Bird Keeper'],
        Catch: biomes['Route 4'].concat(biomes['Route 3']),
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball','Great Ball','Dream Ball','Super Potion','Revive','Premier Ball','Moon Stone','Leaf Stone'],
        Path: ['Catch','Trainer','Trainer','Random','Catch','Trainer','Item','Catch','Random','Trainer','Trainer'],
        Difficulty: 3
    },
    'Dark Cave': {
        Trainer: ['Trainer','Rocket Grunt','Pokémaniac','Burglar','Challenger','Explorer','Scientist','Police Officer','Ninja'],
        Catch: biomes['Dark Cave'].concat(biomes['Route 2']),
        Item: ['Poké Ball','Potion','Nest Ball','Net Ball','Dusk Ball','Great Ball','Ultra Ball','Dream Ball','Super Potion','Revive','Premier Ball','Rare Candy','Moon Stone','Hyper Potion','Dusk Stone',`King's Rock`],
        Path: ['Catch','Catch','Catch','Catch','Trainer','Item','Trainer','Random','Catch','Random','Catch','Item','Trainer'],
        Difficulty: 3
    },
}

const nextEncounter = ([...encounter]) => {

    const tempUIList = document.querySelectorAll(".tempEncounterUI");
    const name = encounter[1].toLowerCase();
    var caseStatus;
    newEncounterImg.src = '../../../data/images/transparent.png';
    newEncounterImg.removeEventListener("click",addToInventory);
    newEncounterImg.classList.remove('item');

    tempUIList.forEach((e) => {
        body.removeChild(e);
    })

    // console.log(encounter[1])

    switch (encounter[0]) {
        case 'Catch':
            caseStatus = 'Catch';
            newEncounterImg.addEventListener('error', (e) => { 
                e.target.src=`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`
            });
            newEncounterImg.src = `https://img.pokemondb.net/sprites/diamond-pearl/normal/${name}.png`;
            // encounterDisplay.appendChild(newEncounterImg);
            displayPokeBalls(ballInventory());
            gameMessage(`A wild ${encounter[1]} appeared!`);
            break;
        case 'Trainer':
            caseStatus = 'Trainer';
            var encSprites = rosterGroups[encounter[1]][0];
            var randSpriteIndex = Math.floor(Math.random()*encSprites.length);
            newEncounterImg.src = rosterGroups[encounter[1]][0][randSpriteIndex];
            // encounterDisplay.appendChild(newEncounterImg);
            gameMessage(`${encounter[1]} challenged you to a battle!`);
            break;
        case 'Item':
            caseStatus = 'Item';
            newEncounterImg.src = '../../data/images/item.png';
            newEncounterImg.classList.add('item')
            newEncounterImg.addEventListener("click", (item) => { 
                if (newEncounterImg.src == window.location.origin + '/data/images/item.png') {
                    var [goldChance,goldAmt] = [Math.random(),Math.ceil(Math.random()*5)*10]; 
                    if(goldChance > 0.7) { moveMoney(goldAmt,true,`You found $${goldAmt}!`) } else { addToInventory(encounter[1],true) }
                    nextEncounterButton.click()
                }
            })
            gameMessage(`You found an item!`);
            break;
        default: break;
    }

    encounterDisplay.appendChild(newEncounterImg);

}

const handleEncounter = (type,obj) => {
}

var pokes = [...Object.values(pokedex)];

export class EncounterTable {
    constructor(name='Route 1') {

        document.title = `Explore: ${name}`
    
        this.encounterGroup = encounterGroups[name];

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
                    result = ['Trainer',RandomName(this.encounterGroup['Trainer'])/* + ' ' + RandomName(firstNames)*/];
                    break;
                case 'Random':
                    x = Math.random()*3;
                    x <= 1 ? result = ['Catch',RandomName(this.encounterGroup['Catch'])] : x <= 1.7 ? result = ['Item',RandomName(this.encounterGroup['Item'])] : x <= 3 ? result = ['Trainer',RandomName(this.encounterGroup['Trainer'])/* + ' ' + RandomName(firstNames)*/] : null;
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

        this.updateRouteHistory = (routeName) => {

        }

        this.routeComplete = (routeName) => {
            alert(`Success! You completed ${routeName}!`);
            this.updateRouteHistory(routeName);
            window.location = location.origin + '/pages/explore/selectRoute.html';
        }

        this.nextEncounter = () => {
            this.rawEncounterTable.length ? nextEncounter(this.rawEncounterTable.shift()) : this.routeComplete(name);
        }

        nextEncounterButton.addEventListener("click", (e) => {
            this.nextEncounter();
        })

        console.log(...this.rawEncounterTable);

    }
}