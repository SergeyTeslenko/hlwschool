let step_x=2;
let step_y=2;
let svg=document.querySelector('svg');
let image=document.querySelector('image');
let width=parseInt(svg.getAttribute('width'));
let height=parseInt(svg.getAttribute('height'));
let width_ball=parseInt(image.getAttribute('width'));
let height_ball=parseInt(image.getAttribute('height'));
function move() {
	// let svg=document.querySelector('svg');
	// let image=document.querySelector('image');
	// let x=image.getAttribute('x');
	// let y=image.getAttribute('y');
	// console.log(x)
	// console.log(y)

let x=parseInt(image.getAttribute('x'));
let y=parseInt(image.getAttribute('y'));
x+=step_x;
y+=step_y;
if (y+height_ball>=height || y<=0) {
	step_y=-step_y;
}
if (x+width_ball>=width || x<=0) {
	step_x=-step_x;
}
image.setAttribute('x', x);
image.setAttribute('y', y);
}
move()
setInterval(move, 10)

