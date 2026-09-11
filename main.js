import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./engine/profile.js";
import { controls } from "./engine/controls.js";
import { loadShop } from "./engine/shop.js";

/* 
ITEMS
DEX -> GEN 3
MONEY
DEX -> GEN 4
SHOP
EVOLUTION
STARTERS (3 RANDOM STARTERS : DO NOT SHARE A TYPE)
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
    INTRO / NEW PLAYER / CHOOSE A STARTER 
    CSS QUERIES
    ------>>>>  (BETA READY FOR LAUNCH) ----<<<<
    BADGES -> GEN 4
    BADGE BONUSES
    DEX -> GEN 6
    */
   
   function startGame() {
        document.title == 'Pokedex' ? populateDexPage() : 
        document.title == 'PC' ? updateProfile() : 
        document.title == 'Controls' ? controls () :
        document.title == 'Shop' ? loadShop() : null;
}

startGame();