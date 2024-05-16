const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


let c = document.querySelector("gameCanvas");
let ctx = c.getContext("2d");

var img = new Image();

ctx.drawImage(img, 0, 0, 100, 100)
img.src = '/assets/salvage/LightBeam.png';