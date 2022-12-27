const WIDTH = 480;
const HEIGHT = 360;

// create SVG document and set its size
let draw = SVG('game').size(WIDTH, HEIGHT);

let background = draw.rect(WIDTH, HEIGHT).fill('#dde3e1');
let borderLeft = draw.line(30, 0, 30, HEIGHT).stroke({width: 10, stroke: "black"});
let borderRight = draw.line(450, 0, 450, HEIGHT).stroke({width: 10, stroke: "black"});
let borderMiddle = draw.line(WIDTH/2, 0, WIDTH/2, HEIGHT).stroke({width: 5, stroke: "black", dasharray: [10, 10]});

let car = draw.image('car.png', 30, 60).move(WIDTH/2, 300);
let wall = draw.image('wall.png', 106, 20).move(WIDTH/2, -20);
let text = draw.text("0").move(400, 0).font({size: 40}).fill("white");
let stepCar = 0;
let score = 0;

function update() {
  if (borderMiddle.y() === 0) {
    borderMiddle.dy(10);
  } else {
    borderMiddle.dy(-10);
  }

  car.dx(stepCar);
  
  let collision = car.x() + car.width() > wall.x() && car.x() < wall.x() + wall.width() && car.y() < wall.y() + wall.height();

  if (collision) {
    clearInterval(update_id);
  }

  
  wall.dy(2);
  if (wall.y() >= HEIGHT) {
    score += 1;
    text.text("" + score);
    wall.x(getRandomInt(35, WIDTH - wall.width() - 35));
    wall.y(-wall.height());
  }
  
  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let update_id = setInterval(update, 10);



document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    stepCar = -2;
  } else if (event.keyCode == 39) {
    stepCar = 2;
  }
});


document.addEventListener("keyup", function(event) {
  if (event.keyCode == 37 || event.keyCode == 39) {
    stepCar = 0;
  }
});
