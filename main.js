import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./engine/profile.js";
import { controls } from "./engine/controls.js";

/* 
ITEMS
DEX -> GEN 3
MONEY
DEX -> GEN 4
SHOP
EVOLUTION
BADGES -> GEN 4
STARTERS (3 RANDOM STARTERS : DO NOT SHARE A TYPE)
INTRO / NEW PLAYER / CHOOSE A STARTER
TRAINERS
MOVES
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
GYM CHALLENGES
BATTLE TOWER
BADGE BONUSES
DEX -> GEN 6
*/

function startGame() {
    document.title == 'Pokedex' ? populateDexPage() : 
    document.title == 'PC' ? updateProfile() : 
    document.title == 'Controls' ? controls () : null;
}

startGame();