const WIDTH = 480;
const HEIGHT = 360;

let draw = SVG('game').size(WIDTH, HEIGHT);
let background = draw.image('images/desert.png', WIDTH, HEIGHT);
let dino = draw.image('images/dino1.png', 84, 67).move(0, 180);
let cactus = draw.image('images/cactus2.png', 50, 62).move(WIDTH, 185);
// Дз 2 второй кактус
let cactus2 = draw.image('images/cactus2.png', 50, 62).move(WIDTH, 10);
let text = draw.text("0").move(400, 0).font({size: 40}).fill("white");




let changeY = 0;
let isJump = false;
let score = 0;

function update() {
  if (isJump) {
    dino.dy(changeY);
    changeY += 0.5;
    if (dino.y() >= 180) {
      isJump = false;
    }
  }
  
  let collision = dino.x() + dino.width() > cactus.x() && dino.x() < cactus.x() + cactus.width() && dino.y() + dino.height() > cactus.y();
  // Дз 2 столкновение
  let collision2 = dino.x() + dino.width() > cactus2.x() && dino.x() < cactus2.x() + cactus2.width() && dino.y() + dino.height() > cactus2.y();

  if (collision) {
    alert("Динозаврик пострадал");
    background.load("images/desertGO.png")
    clearInterval(update_id);
  }
  if (collision2) {
    alert("Динозаврик пострадал");
    background.load("images/desertGO.png")
    clearInterval(update_id);
  }

  
  cactus.dx(-4);
  if (cactus.x() <= 0) {
    score += 1;
    text.text("" + score);
    cactus.x(WIDTH);
  }
    // Дз 2 позиция второго кактуса
  cactus2.dx(-2);
  if (cactus2.x() <= 0) {
    score += 1;
    text.text("" + score);
    cactus2.x(WIDTH);
  }
}




let update_id = setInterval(update, 10);

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 32 && !isJump) {
    changeY = -14;
    isJump = true;
  }
});
