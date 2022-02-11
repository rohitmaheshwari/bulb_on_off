const off = document.getElementById("off-btn");
const on = document.getElementById("on-btn");
const image = document.getElementById("image");

on.addEventListener("click", () => {
    image.src = "./images/light-bulb-on.png";
})

off.addEventListener("click", () => {
    image.src = "./images/light-bulb-off.png";
})