/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/logical-operators
    . https://fr.javascript.info/ifelse
    . https://fr.javascript.info/comparison

    Objectif : 

        . Approfondissement expressions booléennes
*/

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

    Il y a plusieurs questions. Commentez vos réponses avant de passer à la suivante pour qu'il n'y
    ait pas d'interférence dans l'exécution de votre code.

    Vous stockerez dans 4 variables nommées pa, pe, fe et mi les poids respectifs des chats Pantoufle, Pelote, Félix et Microcéphale

*/

let pa = getWeightOf('pantoufle');
let pe = getWeightOf('pelote');
let fe = getWeightOf('felix');
let mi = getWeightOf('microcephale');

/*  Q1

    Ecrire un code qui affiche "Le plus lourd de Microcéphale et de Félix est plus lourd que Pantoufle et que Pelote"
    lorsque c'est vrai. Et qui n'affiche rien lorsque c'est faux.
*/


/*  Q2

    Déclarer une variable booléenne nommée exp2 et affectez lui une expression que le navigateur
    évaluera à true si le moins lourd de Félix et Microcéphale est plus lourd que Pantoufle et
    moins lourd que Pelote. Faites en sorte de faire apparaître un message approprié lorsque c'est vrai.
    Sinon on effacera le message (effacer = définir la chaîne vide '' ou "" comme message).
    Ecrire un code qui affiche "Le moins lourd de Microcéphale et de Félix est plus lourd que Pantoufle mais moins Pelote"
    lorsque c'est vrai. Et qui n'affiche rien lorsque c'est faux.
*/
