import { pokedex } from '../data/pokedex.js';
const itemEvo = {
    FireStone: {
        NAME: 'Fire Stone',
        TARGETS: ['Eevee','Growlithe','Magmar','Vulpix']
    },
    WaterStone: {
        NAME: 'Water Stone',
        TARGETS: ['Eevee','Lombre','Poliwhirl','Shellder','Staryu']
    },
    LeafStone: {
        NAME: 'Leaf Stone',
        TARGETS: ['Eevee','Exeggcute','Gloom','Nuzleaf','Weepinbell']
    },
    ThunderStone: {
        NAME: 'Thunder Stone',
        TARGETS: ['Eevee','Electabuzz','Magneton','Nosepass','Pikachu']
    },
    MoonStone: {
        NAME: 'Moon Stone',
        TARGETS: ['Clefairy','Eevee','Jigglypuff','Nidorina','Nidorino','Skitty']
    },
    SunStone: {
        NAME: 'Sun Stone',
        TARGETS: ['Eevee','Gloom','Sunkern']
    },
    DawnStone: {
        NAME: 'Dawn Stone',
        TARGETS: ['Kirlia','Seadra','Snorunt']
    },
    DuskStone: {
        NAME: 'Dusk Stone',
        TARGETS: ['Dusclops','Misdreavus','Murkrow']
    },
    ShinyStone: {
        NAME: 'Shiny Stone',
        TARGETS: ['Eevee','Roselia','Togetic']
    },
    IceStone: {
        NAME: 'Ice Stone',
        TARGETS: ['Eevee','Snorunt','Snover']
    },
    KingsRock: {
        NAME: `King's Rock`,
        TARGETS: ['Clamperl','Poliwhirl','Slowpoke']
    },
    MetalCoat: {
        NAME: 'Metal Coat',
        TARGETS: ['Onix','Riolu','Scyther']
    },
    LinkCase: {
        NAME: 'Link Case',
        TARGETS: ['Graveler','Haunter','Kadabra','Machoke','Porygon2','Rhydon']
    },
}
const rareCandyList = [];
const rareCandyExclusionList = [];
[...Object.entries(itemEvo)].forEach(item => item[1]['TARGETS'].forEach(e => !rareCandyExclusionList.includes(e) ? rareCandyExclusionList.push(e) : null ))
const allMons = [...Object.entries(pokedex)];
const allMonNames = allMons.map(e => e[1][1].NAME);
const canEvolve = allMons.filter(e => e[1][1].NEXT != null);
const cantEvolve = allMons.filter(e => e[1][1].NEXT == null);
canEvolve.forEach(poke => rareCandyExclusionList.includes(poke[1][1].NAME) ? console.log(poke[1][1].NAME) : rareCandyList.push(poke[1][1].NAME))
const checkEvo = () => {}
export const handleEvo = () => {}
// console.log(rareCandyExclusionList,rareCandyExclusionList.length,allMonNames.length,canEvolve.length);
// console.log(rareCandyExclusionList,cantEvolve)
console.log(canEvolve.length,rareCandyExclusionList.length,rareCandyList.length)