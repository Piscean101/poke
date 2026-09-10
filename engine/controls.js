import { placeInPC , addBadge } from "./profile.js";
import { pickRandom } from "./damage.js";
import { pokedex } from "../data/pokedex.js";

export const controls = () => {

    const inputAddPC = document.getElementById("cInputAddPC");
    const submitAddPC = document.getElementById("cSubmitAddPC");

    const inputAddBadge = document.getElementById("cInputAddBadge");
    const submitAddBadge = document.getElementById("cSubmitAddBadge");

    const inputRandomPC = document.getElementById("cInputRandomPC");
    const submitRandomPC = document.getElementById("cSubmitRandomPC");

    submitAddPC.addEventListener("click", (e) => {
        placeInPC(inputAddPC.value) ? window.location = window.location.origin + '/pages/profile.html' : null;
    });

    submitAddBadge.addEventListener("click", (e) => {
        addBadge(inputAddBadge.value)
    });

    submitRandomPC.addEventListener("click", (e) => {
        // console.log(pokedex[Math.floor(Math.random()*pokedex.length)][0])
        placeInPC(pokedex[Math.floor(Math.random()*pokedex.length)][0]) ? window.location = window.location.origin + '/pages/profile.html' : null;
    })

}