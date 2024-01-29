'use strict';

let tableau=[0,1,2,4,5,6,7,8,9];
// var resultat =0;
function afficherTableau (tableau) {
// const printSumArray = function (array) {
   let somme= 0;
    for (let i = 0; i < tableau.length; i++)
    {
        somme += tableau[i];
        console.log(tableau[i])
    }
    let moyenne = somme / tableau.length;
    return moyenne;
    // console.log(resultat)
}
// console.log(resultat);
console.log(afficherTableau(tableau));
// console.log(printSumArray(tableau));