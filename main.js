import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./data/profile.js";
import { controls } from "./engine/controls.js";

/* 
MOVE FROM PC TO ROSTER
MOVE FROM ROSTER TO PC
ITEMS
DEX -> GEN 2
MONEY
SHOP
DEX -> GEN 3
EVOLUTION
STARTERS (3 RANDOM STARTERS : DO NOT SHARE A TYPE)
DEX -> GEN 4
INTRO / NEW PLAYER / CHOOSE A STARTER
TRAINERS
COMBAT
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