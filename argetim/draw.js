const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setting size
const WIDTH = 1024;
const HEIGHT = 576;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style = " background-color: green; padding: 0;";

let isDrawing = false;

function startDraw() {
  isDrawing = true;
}

function endDraw() {
  isDrawing = false;
}

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = 10;
  ctx.lineCap = "round";

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  startDraw();
  e.preventDefault();
});
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseleave", endDraw);
canvas.addEventListener("mousemove", draw);
