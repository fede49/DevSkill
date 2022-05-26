// Scrivere un programma che:
// prende in input un numero a rappresentante la base di un rettangolo  
// prende in input un numero b rappresentante l'altezza di un rettangolo
// Output:
// calcolare e restituire l'area del rettangolo
// calcolare il perimetro del rettangolo

let input:number= prompt ("a") ;
let input2:number= prompt ("b") ;

const a:number = +input;
const b:number = +input2;

console.log (a*b);//aria
console.log (a+a+b+b)//perimetro