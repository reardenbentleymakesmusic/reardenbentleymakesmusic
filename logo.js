let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let scale = 50;

let initial = true;
let partymode = false;

function newRandomColor() {
  return '#' + Math.floor(Math.random()*16777216).toString(16);
}

function drawSquare(x, y) {
  if(initial == true) {
    ctx.fillStyle = "#ffffff";
  } else {
    ctx.fillStyle = newRandomColor();
  }
  ctx.fillRect(x*scale, y*scale, scale, scale);
}

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    drawSquare(this.x, this.y);
  }
}

function setSquares() {
  let squares = [
    new Square(0, 1),
    new Square(0, 2),
    new Square(0, 3),
    new Square(0, 4),
    new Square(0, 5),
    new Square(1, 1),
    new Square(1, 3),
    new Square(2, 1),
    new Square(2, 2),
    new Square(2, 4),
    new Square(2, 5),
    new Square(4, 1),
    new Square(4, 2),
    new Square(4, 3),
    new Square(4, 4),
    new Square(4, 5),
    new Square(5, 1),
    new Square(5, 3),
    new Square(5, 5),
    new Square(6, 2),
    new Square(6, 4)
  ];
  
  for(square of squares) {
    drawSquare(square.x, square.y);
  }
}

setSquares();

canvas.addEventListener('mousedown', e => {
  initial = false;
  let cursorX = Math.floor((e.offsetX)/scale);
  let cursorY = Math.floor((e.offsetY)/scale);
  for(square of squares) {
    if(cursorX == square.x && cursorY == square.y) {
      squares[squares.indexOf(square)] = new Square(cursorX, cursorY)
    }
  }
});

$("#partymode").click(function() {
  if(partymode == false) {
    initial = false;
    partymode = true;
    $(this).text("party mode on");
  } else {
    partymode = false;
    $(this).text("party mode off");
  }
});

while(partymode) {
  setInterval(function() {
    setSquares();
  }, 500);
}
