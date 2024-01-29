function makeActive(btn) {
    btn.classList.add('active-btn');
    btn.classList.remove('btn');
}
function makeUsual(btn) {
    btn.classList.remove('active-btn');
    btn.classList.add('btn');
}

export function makeActiveAndUsual(btn1, btn2) {
    Array.from(btn1).forEach(btn => {
        makeActive(btn);
    });
   Array.from(btn2).forEach(btn => {
        makeUsual(btn);
    });
}