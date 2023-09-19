/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/ifelse
    . https://fr.javascript.info/comparison
    . https://fr.javascript.info/variables
    . https://fr.javascript.info/function-basics

    Objectifs : 

        . Savoir utiliser une variable (déclaration, affectation (donner une valeur à), lecture)
        . Introduction à l'utilisation de fonctions
            - appeler une fonction
            - enregistrer dans une variable une valeur *retournée* par une fonction (comprendre "fabriquée", "produite")
            - appeler une fonction en lui transmettant une valeur en paramètre
*/


/** POINT COURS

    Nous voulons juste apprendre à utiliser des fonctions qui existent déjà.

    1. FONCTIONS "SIMPLES" (sans valeur de retour, sans paramètres) :
    Qu'est-ce qu'une fonction ? Dans l'immédiat, il est suffisant de comprendre qu'une fonction
    possède un nom et qu'elle réalise une action, une tâche précise.
    Chaque fois qu'on * appelle * la fonction (c'est à dire : qu'on écrit son nom dans notre code),
    la machine exécute l'action associée à la fonction. On dit qu'elle exécute la fonction.

    Pour appeler une fonction nommée pour l'exemple "aSuperFunction" on écrira :

    aSuperFunction();

    Les parenthèses sont TRES importantes. Elles permettent à la machine de faire la différence entre les
    noms des fonctions et les noms des variables. Si vous les oubliez, l'action de la fonction ne sera pas exécutée.

    2. FONCTIONS AVEC VALEUR DE RETOUR :
    Une fonction peut éventuellement produire/fournir une valeur. On dit qu'elle * retourne * une valeur.
    Lorsque c'est le cas, il faut toujours prévoir d'enregistrer cette valeur dans une variable si on veut
    pouvoir l'utiliser dans la suite de notre programme. Sinon la valeur retournée par la fonction est perdue.
    Exemple : on dispose d'une fonction randomNumber qui retourne un nombre entier compris entre 0 et 100. 
    Pour l'utiliser on pourra écrire : 

    let number = randomNumber();

    Ainsi la machine exécutera d'abord la fonction randomNumber, remplacera son appel par la valeur retournée/produite, et 
    la valeur sera sauvegardée dans la variable number. Elle pourra donc être utilisée dans le reste du programme.

    3. FONCTIONS AVEC PARAMETRE :
    Pour être exécutée, une fonction peut éventuellement avoir besoin qu'on lui transmette des informations lorsqu'on l'appelle.
    Imaginons une fonction addTVA dont l'action est de retourner un prix augmenté de 20%. Pour ce addTVA
    aura besoin qu'on lui donne le prix à augmenter en * paramètre *. C'est à dire entre ses parenthèses. Par exemple : 

    let prixAvecTVA = addTVA(100.00);

    Ici l'appel à la fonction se fait en transmettant le prix 100.00 en paramètre. Conformément à l'action de cette fonction, 
    la valeur 120.00 sera sauvegardée dans la variable prixAvecTVA.

    4. CONCLUSION : 
    Pour bien utiliser et appeler correctement une fonction, il faut savoir : 
        - comment elle s'appelle
        - ce qu'elle fait
        - si elle retourne une valeur
        - si elle a besoin d'informations en paramètre
    
    Pour plus tard : 
    L'action d'une fonction ne se déclare pas comme par magie. Il existe du code associé à une fonction et dont l'exécution réalise
    l'action souhaitée. Mais :
        - nous verrons ça plus tard lorsque nous apprendrons à créer nos propres fonctions
        - savoir ce que fait une fonction est suffisant pour s'en servir. Pas besoin de savoir comment elle le fait.
*/


/*
    Objectif : regarder ./asset/objectif.mp4

    Le code que vous écrirez dans ce fichier sera exécuté par le navigateur à
    chaque fois que vous modifierez la valeur du champ input sur la page (index.html).

    Pour réaliser l'exercice, vous disposez :
    . de la fonction getInputValue qui retourne la valeur présente dans le champ input sur la page.
    . de la foncton setResult qui prend en paramètre une chaîne de caractères et la fait apparaître
    dans l'élément h3 de la page. setResult ne retourne aucune valeur.

    Pensez à utiliser la console du navigateur pour tester ces fonctions et comprendre comment les utiliser.

*/

let note = getInputValue();
