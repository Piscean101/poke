import { populateDexPage } from "./data/pokedex.js";
import { updateProfile } from "./data/profile.js";

function startGame() {
    populateDexPage();
    updateProfile();
}

startGame();