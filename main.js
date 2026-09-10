import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./data/profile.js";
import { controls } from "./engine/controls.js";

/* ---------DOUBLE CLICK TO DELETE FROM PC BEING CALLED AFTER REGULAR CLICK EVENT -> CANNOT RELEASE POKE
DEX -> GEN 2
ITEMS
MONEY
SHOP
DEX -> GEN 3
EVOLUTION (
    LEAFEON,VILEPLUME,VICTREEBEL,EXEGGUTOR,SHIFTRY --- LEAF STONE
    NIDOQUEEN,NIDOKING,WIGGLYTUFF,CLEFABLE,DELCATTY --- MOON STONE
    VAPOREON,POLIWRATH,STARMIE,CLOYSTER,LUDICOLO --- WATER STONE
    JOLTEON,RAICHU,MAGNEZONE,PROBOPASS --- THUNDER STONE
    ESPEON,GALLADE,FROSLASS --- DAWN STONE
    UMBREON,HONCHKROW,MISMAGIUS --- DUSK STONE
    FLAREON,NINETALES,ARCANINE --- FIRE STONE
    GLACEON,GLALIE,ABOMASNOW --- ICE STONE
    SYLVEON,TOGEKISS,ROSERADE --- SHINY STONE
    BELLOSSOM,SUNFLORA --- SUN STONE
)
BADGES -> GEN 4
STARTERS (3 RANDOM STARTERS : DO NOT SHARE A TYPE)
DEX -> GEN 4
INTRO / NEW PLAYER / CHOOSE A STARTER
TRAINERS
COMBAT 
    CRIT RATES (
        SPE : CRIT %
        0 : 6%
        1 : 10%
        2 : 15%
        3 : 20%
        4 : 26%
        5 : 33%
        6 : 40%
        7 : 48%
        8 : 57%
        9 : 66%
        10 : 75%
    )
ENCOUNTERS
BADGE BONUSES
DEX -> GEN 6
*/

function startGame() {
    document.title == 'Pokedex' ? populateDexPage() : 
    document.title == 'PC' ? updateProfile() : 
    document.title == 'Controls' ? controls () : null;
}

startGame();