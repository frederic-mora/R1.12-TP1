
  let data = {
    rect: {
        x:400,
        y:200,
        w:180,
        h:100
    },
    pt:{
        x:200,
        y:200
    }
}


let count=0;

let clearColor = 'white';

let getRectangleCoordinates = function(){
    return {
        x1: data.rect.x,
        x2: data.rect.x + data.rect.w,
        y1: data.rect.y,
        y2: data.rect.y + data.rect.h
    }
}

let getPointCoordinates = function(){
    return { x:data.pt.x, y:data.pt.y};
}


let setClearColor = function(color){
    clearColor = color;
}

let studentCode = undefined;

function draw() {
    var canvas = document.querySelector("canvas");
    
    var ctx = canvas.getContext("2d");

    // clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // draw canvas background and border
    if (studentCode!=undefined) studentCode();
    ctx.fillStyle = clearColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(0, 0, canvas.width,canvas.height);

    // draw data.rect
    ctx.fillStyle = "rgba(0, 0, 180, .5)";
    ctx.fillRect(data.rect.x, data.rect.y, data.rect.w, data.rect.h);
    ctx.fillStyle = "rgba(0, 0, 180, 0)";
    ctx.lineWidth = 1;
    ctx.strokeRect(data.rect.x, data.rect.y, data.rect.w, data.rect.h);

    // move data.pt
    //let time = new Date();
    count = count + 0.01;
    data.pt.x = Math.round(300 + 120*Math.cos(count));
    data.pt.y = Math.round(300 + 150*Math.sin(count));

    // draw data.pt
    var cercle = new Path2D();
    cercle.arc(data.pt.x, data.pt.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(0,0,0)";
    ///ctx.fillRect(data.pt.x, data.pt.y, 2, 2);
    ctx.fill(cercle);

    

    window.requestAnimationFrame(draw);
    
  }

  draw();


  window.addEventListener('load', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'script.js');
    let handler_load = function(){
        studentCode = new Function(xhr.responseText);
    }
    xhr.addEventListener('load', handler_load);
    xhr.send();
  })

