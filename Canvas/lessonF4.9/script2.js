let canvas=document.getElementById('canvas')
let ctx=canvas.getContext('2d');
const WIDTH=window.innerWidth-25;
const HEIGHT=window.innerHeight-25;
canvas.width=WIDTH
canvas.height=HEIGHT

function randInt(min,max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let new_x=WIDTH/2;
//Комментариями отмечено Домашнее задание 2
//let new_y=HEIGHT/2
let width=50
window.requestAnimationFrame(draw);
function draw() {
	ctx.lineWidth=width;
	ctx.beginPath()
	ctx.moveTo(new_x,HEIGHT)
	ctx.lineTo(new_x,0)
	//для реализации нужно заккоментировать верхние две строчки, а то линии будут заполняться и вертикально и горизонтально
	// ctx.moveTo (WIDTH,new_y)
	// ctx.lineTo(0,new_y)
	ctx.stroke()
	ctx.closePath()
	new_x=randInt(0,WIDTH);
	//new_y=randInt(0,HEIGHT);
	width--;
	console.log(width)
	window.requestAnimationFrame(draw);
	
}