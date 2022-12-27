// let ctx = document.getElementById('canvas').getContext('2d');
// ctx.fillStyle="#7D95A4"
// ctx.fillRect(0,0,400,400)
// ctx.strokeStyle="#DFEC14"
// ctx.strokeRect(5,5,390,390)
// ctx.clearRect(175,175,50,50)
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(400, 400);
// ctx.moveTo(400, 0);
// ctx.lineTo(0, 400);
// ctx.moveTo(250,200)
// ctx.arc(200, 200, 50, 0, Math.PI*2,true);
// ctx.stroke();
// ctx.fill();
// ctx.closePath()

let ctx2 = document.getElementById('canvas2').getContext('2d');
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0, 0, 150, 150);
ctx2.beginPath();
ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Главный круг
ctx2.moveTo(110, 75);
ctx2.arc(75, 75, 35, 0, Math.PI, false); // Рот
ctx2.moveTo(65, 65);
ctx2.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
ctx2.moveTo(95, 65);
ctx2.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
ctx2.stroke();
ctx2.closePath()
