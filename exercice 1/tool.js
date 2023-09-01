
let handler_change = function(ev){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'script.js');
    let handler_load = function(){
        let f = new Function(xhr.responseText);
        f();
    }
    xhr.addEventListener('load', handler_load);
    xhr.send();
}



document.querySelector('input').addEventListener('change', handler_change);