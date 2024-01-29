import { makeActiveAndUsual } from "./handle-menu-buttons";

const homeBtn = document.querySelectorAll('.button-home');
const favoritesBtn = document.querySelectorAll('.button-favorites');

makeActiveAndUsual(favoritesBtn, homeBtn);

favoritesBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        makeActiveAndUsual([btn], homeBtn);
    });
});