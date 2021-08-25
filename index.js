const canvas = document.querySelector("#canvas");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const color = document.querySelector("#color");
const clear = document.querySelector(".clear");
const size = document.querySelector(".size");
let beginSize = 1;
let isPressed = false;
let beginColor = "black";
let x = undefined;
let y = undefined;
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    circle(x2, y2);

    lines(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function circle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, beginSize, 0, Math.PI * 2);
  ctx.fillStyle = beginColor;
  ctx.fill();
  ctx.save();
}
function lines(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = beginSize * 2;
  ctx.strokeStyle = beginColor;
  ctx.stroke();
}
increase.onclick = function () {
  beginSize += 1;
  if (beginSize >= 100) {
    beginSize = 100;
  }

  size.innerHTML = beginSize;
};
decrease.onclick = function () {
  beginSize -= 1;
  if (beginSize <= 1) {
    beginSize = 1;
  }

  size.innerHTML = beginSize;
};
clear.onclick = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
color.onchange = function (e) {
  beginColor = e.target.value;
};
