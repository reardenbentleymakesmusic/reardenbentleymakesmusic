let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";

let scale = 50;

function drawSquare(x, y) {
  ctx.fillRect(x*scale, y*scale, scale, scale);
}

drawSquare(0, 1);
drawSquare(0, 2);
drawSquare(0, 3);
drawSquare(0, 4);
drawSquare(0, 5);
drawSquare(1, 1);
drawSquare(1, 3);
drawSquare(2, 1);
drawSquare(2, 2);
drawSquare(2, 4);
drawSquare(2, 5);

drawSquare(4, 1);
drawSquare(4, 2);
drawSquare(4, 3);
drawSquare(4, 4);
drawSquare(4, 5);
drawSquare(5, 1);
drawSquare(5, 3);
drawSquare(5, 5);
drawSquare(6, 2);
drawSquare(6, 4);
