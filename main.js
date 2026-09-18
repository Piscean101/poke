import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./engine/profile.js";
import { controls } from "./engine/controls.js";
import { loadShop } from "./engine/shop.js";
import { selectRoute } from "./engine/routes.js";
import { EncounterTable } from "./engine/encounters.js";

/* 
ENCOUNTERS
ITEMS (
--increase starting energy
--temporarily improve universal catch rate
    MAXIMUM BAG SIZE
    EVOLUTION
    COMBAT (
    stage
    choice
    handleSwitch
    handleCombat (
        checkType
        )
    )
)
DEX -> GEN 3
DEX -> GEN 4
STARTERS (3 RANDOM STARTERS : DO NOT SHARE A TYPE)
TRAINERS
MOVES
CRIT RATES ( --double power AND half def
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
    GYM CHALLENGES (2V2 3v3 4v4 5V5);
    ELITE FOUR (6V6);
    BATTLE TOWER (3V3 4V4);
    INTRO / NEW PLAYER / CHOOSE A STARTER 
    MONEY/ITEM DISTRIBUTIONS
    CSS QUERIES
    CHECK FOR THE NECESSARY LOCAL STORAGES TO FUNCTION, IF ANY NOT FOUND, CALL INITIALIZE => CHOOSE STARTER SEQUENCE, THEN REFRESH AND CALL START GAME
    ------>>>>  (BETA READY FOR LAUNCH) ----<<<<
    BADGES -> GEN 4
    BADGE BONUSES
    DEX -> GEN 6
    */

if (!localStorage.getItem("playerInventory")) {

    localStorage.setItem("playerInventory","Poké Ball");

}   

function startGame() {
    document.title == 'Pokedex' ? populateDexPage() : 
    document.title == 'PC' ? updateProfile() : 
    document.title == 'Controls' ? controls () :
    document.title == 'Shop' ? loadShop() : 
    document.title == 'Choose Your Route' ? selectRoute() : null;
    
    if (document.title.split(':')[0] == 'Explore') {
        const routeName = document.title.split(':')[1].replace(' ','');
        const encounterTable = new EncounterTable(routeName,7); 
    }
}

startGame();