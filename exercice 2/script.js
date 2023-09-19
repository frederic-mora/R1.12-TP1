/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/logical-operators
    . https://fr.javascript.info/ifelse
    . https://fr.javascript.info/comparison

    Objectifs : 

        . Approfondissement if/else et expressions booléennes
        . Entrainement à l'utilisation de fonctions
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

 */

/** POINT COURS
 * 
 *  Une expression booléenne est quelque chose que la machine va évaluer à vrai (true) ou bien à faux (false).
 *  Quand on utilise une instruction comme un if/else, une condition détermine si on doit exécuter le bloc
 *  associé au if ou bien celui associé au else. Cette condition est nécessairement une expression booléenne.
 *  Si elle vaut true, la machine exécute le bloc du if, sinon (false donc) le bloc du else.
 * 
 *  1. EXPRESSIONS BOOLEENNES SIMPLES :
 *  Les exemples ci-dessous sont données avec une variable n supposé contenir un nombre. Ils illustrent les
 *  principaux opérateurs dont on dispose pour comparer des valeurs entre elles :
 * 
 *  . n > 0 (true si n strictement positif, false sinon)
 *  . n < -2 (tue si n strictement inférieur à -2, false sinon)
 *  . n <= 10  (true si n supérieur ou égal à 10, false sinon)
 *  . n >= 100 (true si n inférieur ou égal à 100, false sinon)
 *  . n == 666 (true si n contient la valeur 666, false sinon)
 * 
 *  2. EXPRESSION BOOLEENNES COMBINEES :
 *  Parfois une simple comparaison est insuffisante pour exprimer ce que l'on souhaite. On a alors la possibilité
 *  de combiner plusieurs expressions simples pour aboutir à une expression plus complexe. Pour ce on utilise des
 *  opérateurs logiques. Voici les principaux illustrés : 
 * 
 *      2.1 Le "ou logique" : || 
 *      Pour dire qu'une expression est vraie si au moins une condition sur deux est vraie. Exemple : un magasin 
 *      fait 15% de remise si vous achetez au moins 4 articles ou bien si le total de vos achats dépasse 60€.
 *      Etant donné nbArticle et total les deux variables qui contiennent ces informations, quelle expression est vraie
 *      si on a droit à la remise ?
 * 
 *      nbArticles >= 4 || total>60
 * 
 *      Note : la machine évalue toujours les opérateurs de comparaison AVANT les opérateurs logiques
 * 
 * 
 *      2.2 le "et logique" : &&
 *      Pour dire qu'une expression est vraie seulement si deux conditions sont vraies. Exemple : Etant donné
 *      un nombre n, quelle expression est vraie si n est strictement compris entre 0 et 20 ?
 * 
 *      0<n && n<20
 * 
 *      Attention, on pourrait être tenté d'écrire : 0 < n < 20
 *      Si cette expression est humainement compréhensible, elle ne le sera pas par la machine et provoquera une erreur.
 * 
 * 
 *      2.3 Le "non logique" : !
 *      Pour dire l'opposé, inverser l'évaluation d'une expression. Exemple : Etant donné un nombre n, quelle expression
 *      est vraie si n n'est pas strictement compris entre 0 et 20. On peut alors inverser l'expression de l'exemple précédent :
 *      
 *      !(0<n && n<20)
 * 
 *      Note : dans le cas d'une expression utilisant les opérateurs || et &&, l'opérateur && est prioritaire sur le ||.
 *      Pour mémoire, on appelle parfois le "ou logique" l'addition logique et le "et logique" la multiplication logique.
 *      Et comme pour les opérateurs arithmétiques + et *, la multiplication est prioritaire sur l'addition.
 */

/*  

   On utilise la fonction getWeightOf pour lire et stocker dans 3 variables nommées pa, pe et fe
   les poids respectifs des chats Pantoufle, Pelote et Félix

*/
let pa = getWeightOf('pantoufle');
let pe = getWeightOf('pelote');
let fe = getWeightOf('felix');

/*  Q1

    Remplacer la valeur false par une expression booléenne qui sera vraie uniquement lorsque
    Pantoufle est bien plus petit que Pelote et Félix.
    Note : objectif.mp4 ne montre pas le message du else, mais n'en tenez pas compte.
*/

if ( false ){
    setMessage("Pantoufle est le plus petit des chats");
}
else{
    setMessage("Pantoufle n'est pas le plus petit chats");
}

/*  Q2 

    Décommentez et remplacez la valeur false par une expression booléenne qui sera vraie
    uniquement si Pantoufle est le plus lourd des chats.
*/

/*
if ( false ){
    setMessage("Pantoufle est le plus lourd des chats");
}
else{
    setMessage("Pantoufle n'est pas le plus lourd des chats")
}
*/

/*  Q3

    Ecrire un code utilisant une expression booléenne évaluée à true si pa (Pantoufle) ou (non exclusif) pe (Pelote)
    est plus lourd que fe (Félix), à faux sinon. Faites en sorte de faire apparaître le 
    message "Pantoufle ou Pelote est plus lourd que Félix" quand c'est vrai, "Ni Pantoufle ni Pelote n'est plus lourd que Félix"
    quand c'est faux. 
*/


/*  Q4

    Ecrire un code qui affiche quand c'est vrai : "Pantoufle n'est ni le plus lourd ni le plus petit des chats"
    Et quand c'est faux : "Pantoufle est soit le plus lourd soit le plus petit des chats"

    Proposez deux solutions, une sans l'opérateur ! et une avec
*/
