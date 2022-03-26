let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scale = 60;

drawSquare(0*scale, 1*scale);
drawSquare(0*scale, 2*scale);
drawSquare(0*scale, 3*scale);
drawSquare(0*scale, 4*scale);
drawSquare(0*scale, 5*scale);
drawSquare(1*scale, 1*scale);
drawSquare(1*scale, 3*scale);
drawSquare(2*scale, 1*scale);
drawSquare(2*scale, 2*scale);
drawSquare(2*scale, 4*scale);
drawSquare(2*scale, 5*scale);

drawSquare(4*scale, 1*scale);
drawSquare(4*scale, 2*scale);
drawSquare(4*scale, 3*scale);
drawSquare(4*scale, 4*scale);
drawSquare(4*scale, 5*scale);
drawSquare(5*scale, 1*scale);
drawSquare(5*scale, 3*scale);
drawSquare(5*scale, 5*scale);
drawSquare(6*scale, 2*scale);
drawSquare(6*scale, 4*scale);

function drawSquare(x, y) {
  ctx.fillStyle = #ffffff;
  ctx.fillRect(x, y, scale, scale);
}
