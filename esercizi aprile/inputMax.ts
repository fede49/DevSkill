//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` grande inserito
//E.S 
// Input : 1 9 19 9 1 9 0 -1
// Output : 19

let input:number = + prompt("inserisci numero");
let max:number = input;

while(input!=-1 ){
  if(input>max){
  max=input;
 }input= + prompt("inserisci numero");
}
if ( max != -1) {

console.log(max);
}