function task7(){
    let svg = document.querySelector('.task7')
    setTimeout(()=>{
        svg.setAttribute('fill', 'red')
    },1000)
    setTimeout(()=>{
        svg.setAttribute('fill', 'blue')
    },2000)
    setTimeout(()=>{
        svg.setAttribute('fill', 'green')
    },3000)
}
task7()
setInterval(()=>{
    task7()
},3000)


function task8(){
    let frame = SVG().addTo('#frame').size(550, 400);
    let bg=frame.rect(400,400).fill("#c9c9c9"); 

    let ball=frame.circle().radius(20).cx(200).cy(200).fill("#000");
}
task8()


function tas9(){
    let canvas = document.getElementById('canvas1').getContext('2d')
    canvas.fillStyle="#B04BFF"
    canvas.fillRect(0,0, 400 ,400)

    canvas.beginPath();
    canvas.strokeStyle = "#FF6600";  
    canvas.lineWidth = 10;
    canvas.arc(200,200, 90, 0, (Math.PI/180)*360, false);
    canvas.stroke(); 
}
task9()
