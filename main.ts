console.log("LOL")
console.log("XD")

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = <any> document.getElementById('source');

image.addEventListener('load', e => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});