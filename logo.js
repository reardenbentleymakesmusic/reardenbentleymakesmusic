let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scale = 50;

function newRandomColor() {
  return '#' + Math.floor(Math.random()*16777216).toString(16);
}

function drawSquare(x, y, white) {
  if(white == true) {
    ctx.fillStyle = "#ffffff";
  } else {
    ctx.fillStyle = newRandomColor();
  }
  ctx.fillRect(x*scale, y*scale, scale, scale);
}

class Square {
  constructor(x, y, white) {
    this.x = x;
    this.y = y;
    this.white = white;
    drawSquare(x, y, white);
  }
}

let squares = [
  new Square(0, 1, true),
  new Square(0, 2, true),
  new Square(0, 3, true),
  new Square(0, 4, true),
  new Square(0, 5, true),
  new Square(1, 1, true),
  new Square(1, 3, true),
  new Square(2, 1, true),
  new Square(2, 2, true),
  new Square(2, 4, true),
  new Square(2, 5, true),
  new Square(4, 1, true),
  new Square(4, 2, true),
  new Square(4, 3, true),
  new Square(4, 4, true),
  new Square(4, 5, true),
  new Square(5, 1, true),
  new Square(5, 3, true),
  new Square(5, 5, true),
  new Square(6, 2, true),
  new Square(6, 4, true)
];

for(square of squares) {
  drawSquare(square.x, square.y);
}

canvas.addEventListener('mousedown', e => {
  let cursorX = Math.floor((e.offsetX)/scale);
  let cursorY = Math.floor((e.offsetY)/scale);
  for(square of squares) {
    if(cursorX == square.x && cursorY == square.y) {
      squares.indexOf(square) = new Square(cursorX, cursorY, false)
    }
  }
});
