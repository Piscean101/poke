import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./data/profile.js";
import { controls } from "./engine/controls.js";

/* 
ITEMS
MONEY
SHOP
EVOLUTION
TRAINERS
ENCOUNTERS
COMBAT
BADGE BONUSES
*/

function startGame() {
    document.title == 'Pokedex' ? populateDexPage() : 
    document.title == 'PC' ? updateProfile() : 
    document.title == 'Controls' ? controls () : null;
}

startGame();