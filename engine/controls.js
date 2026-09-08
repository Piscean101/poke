import { placeInPC , addBadge } from "../data/profile.js";

export const controls = () => {

    const inputAddPC = document.getElementById("cInputAddPC");
    const submitAddPC = document.getElementById("cSubmitAddPC");

    const inputAddBadge = document.getElementById("cInputAddBadge");
    const submitAddBadge = document.getElementById("cSubmitAddBadge");

    submitAddPC.addEventListener("click", (e) => {
        placeInPC(inputAddPC.value);
        placeInPC ? window.location = window.location.origin + '/pages/profile.html' : null;
    });

    submitAddBadge.addEventListener("click", (e) => {
        addBadge(inputAddBadge.value)
    })

}