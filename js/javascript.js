
window.addEventListener("DOMContentLoaded", (event) => {
    let sinigang = document.querySelector(".dish-text.one");
    sinigang.addEventListener("click", () => {
        window.location.assign("../recipes/pork_sinigang.html");
    });

    let adobo = document.querySelector(".dish-text.three");
    adobo.addEventListener("click", () => {
        window.location.assign("../recipes/chicken_adobo.html");
    });

    let palabok = document.querySelector(".dish-text.five");
    palabok.addEventListener("click", () => {
        window.location.assign("../recipes/palabok.html");
    });
});

