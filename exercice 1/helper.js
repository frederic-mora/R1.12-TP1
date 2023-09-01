
let getInputValue = function(){
    return parseInt(document.querySelector('input').value);
}

let setResult = function(text){
    let h3 = document.querySelector('h3');
    h3.textContent = text;
    let val = getInputValue();
    h3.style.color = val<8 ? "red" : val<10 ? "orange" : "green";
}