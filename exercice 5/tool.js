

let studentCode = undefined;

let count1 = 0;
let count2 = 0;

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

    drawRect(ctx, data.rect1, 'blue');
    drawRect(ctx, data.rect2, 'orange');
    
    
    // move rectangles
    
    count1 = count1 + 0.01;
    count2 = count2 + 0.02;
    data.rect1.x = Math.round(300 + 120*Math.cos(count1));
    data.rect1.y = Math.round(300 + 150*Math.sin(count2));
    data.rect2.x = Math.round(300 + 120*Math.cos(count2));
    data.rect2.y = Math.round(300 - 160*Math.sin(count1));

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

