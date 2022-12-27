let ctx = document.getElementById('canvas').getContext('2d');
window.requestAnimationFrame(draw);
let radius=50
let angle=0;
let colors = ["green","red","black", "yellow"]
function draw(){
	ctx.clearRect(0, 0, 400, 400);
	ctx.beginPath();
	ctx.fillStyle = "#006699";
	ctx.lineWidth = 3;
	ctx.strokeStyle=colors[Math.floor(Math.random()*4)]
	ctx.arc(225, 225, radius, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.stroke()
	ctx.closePath();
	radius=Math.abs(Math.cos(angle))*100
	console.log(radius)
	angle+=0.01
	window.requestAnimationFrame(draw);
}