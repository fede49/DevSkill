//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` piccolo inserito
//E.S 
// Input : 1 9 19 9 1 9 0 -1
// Output : 0

let input:number = + prompt("inserisci numero");
let min:number = input;

while(input!=-1 ){
  if(input<min){
  min=input;
 }input= + prompt("inserisci numero");
}if ( min != -1) {
console.log(min);
}