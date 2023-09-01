

let getWeightOf = function(catname){
    let div = document.querySelector( '#'+catname.toLowerCase() );
    if (div == undefined ) return undefined;
    return parseInt( div.querySelector('strong').textContent);
}

let setMessage = function(text){
    document.querySelector('h3').textContent = text;
}