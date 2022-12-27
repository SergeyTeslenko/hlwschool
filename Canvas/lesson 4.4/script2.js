const WIDTH = 550;
const HEIGHT = 400;
let array=[-2,2]
let step_x=array[getRandomInt(0,1)];
let step_y=array[getRandomInt(0,1)];
let score_left=0;
let score_right=0;
let step_left=0;
let step_right=0;
let start=false;
//создаем все объекты игры
let draw = SVG().addTo('#game').size(WIDTH, HEIGHT);
let background=draw.rect(WIDTH,HEIGHT).fill("#EEE154");
let line=draw.line(275,0,275,HEIGHT).stroke({color: "black", width:2, dasharray:"10"});

let ball=draw.circle().radius(20).cx(WIDTH/2).cy(HEIGHT/2).fill("#F97171").stroke({width:1,color: "black"});
let racket1=draw.rect(15,80).fill("#F6AC2B").stroke({width:1,color: "black"}).move(15,HEIGHT/2-80/2);
let racket2=draw.rect(15,80).fill("#7ED92D").stroke({width:1,color: "black"}).move(WIDTH-15-15,HEIGHT/2-80/2);
let racket1_score=draw.text("0").fill("#5559EA").font({size:50}).move(225,0);
let racket2_score=draw.text("0").fill("#5559EA").font({size:50}).move(300,0);

//нажатие кнопок
//правая ракетка
document.addEventListener("keydown",function(){
	let key_code=event.keyCode
	if(key_code==38){
		step_right-=5;
		racket2.dy(step_right)
		if(racket2.y()<0){
			racket2.y(0)
		}
	}
	if(key_code==40){
		step_right+=5;
		racket2.dy(step_right)
		if(racket2.y()>HEIGHT-racket2.height()){
			racket2.y(HEIGHT-racket2.height())
		}
	}
})
//левая ракетка
document.addEventListener("keydown",function(){
    let key_code=event.keyCode
    if(key_code==87){
          step_left-=5;
          if(racket1.y()<0){
               racket1.y(0)
          }
     }
      if(key_code==83){
          step_left+=5;
          if(racket1.y()>HEIGHT-racket1.height()){
               racket1.y(HEIGHT-racket1.height())
          }
     }
})

//отпускание кнопок
//правая ракетка
document.addEventListener("keyup", function(){
	let key_code=event.keyCode
	if(key_code==38 || key_code==40){
		step_right=0
	}
})
//левая ракетка
document.addEventListener("keyup", function(){
     let key_code=event.keyCode
     if(key_code==87 || key_code==83){
          step_left=0;
     }
})
function move_ball(){
     if (start){
          racket2.dy(step_right)
          racket1.dy(step_left)
     	 //вытаскиваем координаты центра и вычисляем радиус, как разность между точкой центра и точкой левого края
          let x=ball.cx();
          let y=ball.cy();
          let radius=ball.cx()-ball.x();
          //увеличиваем координаты на заданный шаг 
          x+=step_x;
          y+=step_y;
          //проверяем координаты по y
          if(y+radius>=HEIGHT || y-radius<0){
           step_y=-step_y
          }
          // //проверяем координаты по x - заменяется на ДЗ1
          // if(x+radius>=WIDTH || x-radius<0){
          //  step_x=-step_x
          // }
          // ДЗ1
          if (x+radius>=WIDTH){
          	x=WIDTH/2
          	score_left++
               racket1_score
          	// console.log(score_left)
          }    if (x+radius>=WIDTH){
          	x=WIDTH/2
          	score_left++
               racket1_score.text(score_left.toString())
          	// console.log(score_left)
          }
          if (x-radius<=0){
          	x=WIDTH/2
          	score_right++
          	// console.log(score_right)
               racket2_score.text(score_right.toString())
          }

          let collision_racket2=x+radius>racket2.x()&&y+radius>racket2.y()&&y+radius<racket2.y()+racket2.height()
          if(collision_racket2){
               step_x=-step_x
               x=racket2.x()-radius
          }
          let collision_racket1=x-radius<racket1.x()+racket1.width()&& y>=racket1.y() && y<=racket1.y()+racket1.height()
          if(collision_racket1){
               step_x=-step_x;
               x=racket1.x()+radius+racket1.width()
          }
          if (score_left>=10){
               alert("Победа левого игрока")
               reset()
          }
          if (score_right>=10){
               alert("Победа правого игрока")
               reset()
          }
          //возвращаем значения обратно в html
          ball.cx(x);
          ball.cy(y);
     }
}
//вызываем функцию по таймеру
setInterval(move_ball,10)
function reset(){
   start=false;
   score_left=0;
   score_right=0;
   racket1_score.text(score_left.toString());
   racket2_score.text(score_right.toString());
   ball.cx(WIDTH/2).cy(HEIGHT/2)
   racket1.move(15,HEIGHT/2-80/2);
   racket2.move(WIDTH-15-15,HEIGHT/2-80/2);
}
function getRandomInt(min,max){
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".reset_score").onclick = reset;
document.querySelector(".start_game").onclick = function(){
     start=true;
}
