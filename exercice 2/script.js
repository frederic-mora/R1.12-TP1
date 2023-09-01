/*
    Objectif : regarder ./asset/objectif.mp4

    Le code que vous écrirez dans ce fichier sera exécuté par le navigateur à
    chaque fois que vous modifierez la valeur d'un input de type range sur la page (index.html).

    Pour réaliser l'exercice, vous disposez :
    . de la fonction getWeightOf qui retourne le poids du chat dont on donne le nom en paramètre.
    Le nom doit être donné sous la forme d'une chaîne de caractère, en minisuscule et sans accent.
    . de la foncton setMessage qui prend en paramètre une chaîne de caractères et la fait apparaître
    dans l'élément h3 de la page. setMessage ne retourne aucune valeur.

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

    Au besoin, quelques liens sur la documentation liée aux notions utiles à l'exercice :
    . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    . https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators
    . https://www.unilim.fr/pages_perso/frederic.mora/algorithmique/#/8/1

    Il y a plusieurs questions. Commentez vos réponses avant de passer à la suivante pour qu'il n'y
    ait pas d'interférence dans l'exécution de votre code.

    Vous stockerez dans 3 variables nommées pa, pe et fe les poids respectifs des chats Pantoufle, Pelote et Félix

*/

let pa = getWeightOf("pantoufle");
let pe = getWeightOf("pelote");
let fe = getWeightOf("felix");

/*  Q1

    Déclarer une variable booléenne nommée paEstPlusPetit et affectez lui une expression que le navigateur
    évaluera à true si pa est le plus petit des 3 chats, faux sinon. Faites en sorte de faire apparaître le 
    message 'Pantoufle est le plus petit des chats' quand paEstPlusPetit vaut true. Sinon on effacera le message.
    (effacer = définir la chaîne vide '' ou "" comme message)
*/
let paEstPlusPetit = pa<pe && pa<fe; // ET PAS pa < (pe && fe)

if (paEstPlusPetit==true){
    setMessage('Pantoufle est le plus petit des chats');
}
else{
    setMessage("");
}

/*  Q2 

     Déclarer une variable booléenne nommée paEstPlusLourd et affectez lui une expression que le navigateur
    évaluera à true si pa est le plus lourd des 3 chats, faux sinon. Faites en sorte de faire apparaître le 
    message 'Pantoufle est le plus lourd des chats' quand paEstPlusLourd vaut true. Sinon on effacera le message.
    (effacer = définir la chaîne vide '' ou "" comme message)
*/
let paEstPlusLourd = pa>pe && pa>fe; 

if (paEstPlusLourd==true){
    setMessage('Pantoufle est le plus lourd des chats');
}
else{
    setMessage("");
}

/*  Q3

    Déclarer une variable booléenne nommée paOuPeEstPlusLourdQueFe et affectez lui une expression que le navigateur
    évaluera à true si pa (Pantoufle) ou (non exclusif) pe (Pelote) est plus lourd que fe (Félix), faux sinon. Faites en sorte de faire apparaître le 
    message 'Pantoufle  ou Peleote est plus lourd que Félix' quand paOuPePlusLourdQueFe vaut true. Sinon on effacera le message.
    (effacer = définir la chaîne vide '' ou "" comme message).
*/
let paOuPeEstPlusLourdQueFe = pa>fe || pe>fe; 

if (paOuPeEstPlusLourdQueFe==true){
    setMessage('Pantoufle ou Pelote est plus lourd que Félix');
}
else{
    setMessage("");
}

/*  Q4

    Déclarer une variable booléenne nommée paEstNiPlusPetitNiPlusLourd et affectez lui une expression que le navigateur
    évaluera à true si pa (Pantoufle) n'est ni le plus petit, ni le plus lourd des 3 chats, faux sinon. Faites en sorte 
    de faire apparaître le message 'Pantoufle  ou Peleote est plus lourd que Félix' quand paEstNiPlusPetitNiPlusLourd 
    vaut true. Sinon on effacera le message.
    (effacer = définir la chaîne vide '' ou "" comme message).

    Q4 bis : Pouvez-vous proposez une solution qui ré-utiliserait vos variables paEstPlusPetit et paEstPlusLourd (à décommenter dans ce cas) ?
*/

let paEstNiPlusPetitNiPlusLourd = (pe<pa && pa<fe) || (fe<pa && pa<pe); 

if (paEstNiPlusPetitNiPlusLourd==true){
    setMessage('Pantoufle ou Pelote est plus lourd que Félix');
}
else{
    setMessage("");
}

/* Q4 bis */

let paEstNiPlusPetitNiPlusLourd = !paEstPlusPetit && !paEstPlusLourd;