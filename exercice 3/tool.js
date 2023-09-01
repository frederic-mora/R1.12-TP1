

document.querySelector('section').addEventListener('input', function(ev){
    let div = ev.target.parentNode;
    let strong = div.querySelector('strong');
    strong.textContent = ev.target.value;
});

let handler_input = function(ev){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'script.js');
    let handler_load = function(){
        let f = new Function(xhr.responseText);
        f();
    }
    xhr.addEventListener('load', handler_load);
    xhr.send();
}



document.addEventListener('input', handler_input);