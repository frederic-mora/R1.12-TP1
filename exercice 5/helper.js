
  let data = {
    rect1: {
        x:400,
        y:200,
        w:180,
        h:100
    },
    rect2: {
        x:200,
        y:100,
        w:100,
        h:130
    }
}


let clearColor = 'white';

let drawRect = function(ctx, r, color){
    ctx.fillStyle = color;
    ctx.fillRect(r.x, r.y, r.w, r.h)
}

let getBlueRectangleCoordinates = function(){
    return {
        x1: data.rect1.x,
        x2: data.rect1.x + data.rect1.w,
        y1: data.rect1.y,
        y2: data.rect1.y + data.rect1.h
    }
}

let getOrangeRectangleCoordinates = function(){
    return {
        x1: data.rect2.x,
        x2: data.rect2.x + data.rect2.w,
        y1: data.rect2.y,
        y2: data.rect2.y + data.rect2.h
    }
}


let setClearColor = function(color){
    clearColor = color;
}