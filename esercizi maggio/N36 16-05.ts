/*Si scriva un programma che, letta da input una lista di interi di 10 elementi, ed un numero 
intero X, verifichi stampi la stringa “OK” se NESSUN elemento della lista è divisibile per X, 
e la stringa “NO” altrimenti. 
ESEMPIO: se l’array contenesse gli elementi 2, 7, 14, 10, 23, 5, 8, 11, 35, 77 e X fosse 3, il 
programma stampare “OK”: infatti nessuno dei numeri contenuti nella lista è divisibile per 3. 
ATTENZIONE: Si noti che affinché il programma possa essere gestito dal valutatore automatico, deve 
essere inviata in stampa solo ed esclusivamente UNA delle due stringhe (OK/NO) senza andare a capo 
e senza aggiungere spaziature, né altre stampe.*/

function inputUtente() :number{
  return +prompt("Inserisci numeri ");
}
function inputUtente2() :number{
  return +prompt("Inserisci divisore");
}

let a:number [] = [];

for(let i:number = 0; i < 10 ; i++){
    a.push(inputUtente());}
    
let x:number=inputUtente2();
function div(){
for (let i = 0; i < 4; i++) {
    if(a[i] % x == 0){
      return "no"
    }else return "ok"}
}
console.log(div())

