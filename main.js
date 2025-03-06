function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const stars_div = document.querySelector(".stars");
const window_width = stars_div.offsetWidth;
const window_height = stars_div.offsetHeight;

const stars_count = window_width > 1000 ? window_width / 2 : window_width / 4;
console.log(`Creating ${stars_count} stars!`);
let aux_count = 0;
let str = "";

while (aux_count < stars_count) {
    let top = getRandomInt(0, window_height);
    let left = getRandomInt(0, window_width);
    let size = getRandomInt(0, 3);
    let size_class = size === 0 ? "sm" : size === 1 ? "md" : "lg";

    str += `<div class="star ${size_class}" style="top: ${top}px;left: ${left}px;"></div>`;
    aux_count++;
}

stars_div.innerHTML = str;