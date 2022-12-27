let ctx = document.getElementById('canvas').getContext('2d');
ctx.fillStyle="#DBD3A6"
ctx.fillRect(0,150,400,250)
ctx.beginPath()
ctx.moveTo(0, 150);
ctx.lineTo(200, 0)
ctx.lineTo(400, 150)
ctx.fillStyle="#E6E793"
ctx.fill()
ctx.moveTo(230,75)
ctx.arc(200,75,30,0,Math.PI*2,true)
ctx.stroke()
ctx.closePath()