/*Scrivere un programma che, letti da input in quest’ordine un intero X, un intero N e una sequenza di N
interi, stampi tutti i numeri pari strettamente minori di X presenti all’interno della sequenza. 
ATTENZIONE: Si noti che affinché il programma possa essere gestito dal valutatore automatico, 
devono essere inviati in stampa solo ed esclusivamente i numeri che rispettano la condizione richiesta, 
senza andare a capo e senza aggiungere spazi o altre stampe (neppure quelle che possono 
accompagnare l'istruzione input per comunicare a chi esegue il programma che dati inserire). 
ESEMPI:
- Se X fosse 10, N fosse 7 e la sequenza di numeri fosse 12 32 15 2 4 9 18, il programma dovrebbe
stampare 24 poiché 2 e 4 sono gli unici numeri pari nella sequenza minori di 10. Si noti come 
non siano presenti spazi a separare i numeri stampati.
- Se X fosse 0, N fosse 8 e la sequenza di numeri fosse 14 12 32 15 2 4 9 18, il programma non dovrebbe
stampare nulla poichè tutti i numeri pari nella sequenza sono maggiori di 0. 
- Se X fosse 30, N fosse 4 e la sequenza di numeri fosse 15 1 15 3, il programma non dovrebbe 
stampare nulla poichè non ci sono numeri pari nella sequenza.*/

function inputUtente() :number{
    return +prompt("inserisci x");
  }
  function inputUtente2() :number{
    return +prompt("inserisci n");
  }
  

let x = inputUtente();
let n = inputUtente2();
let a:number[]=[]
let stringa:string = "";

for(let i = 0; i < n; i++){
    let sequenza = +prompt("Inserisci numero");
    a.push(sequenza);
}
for(let i = 0; i < a.length; i++){
    if(a[i]%2 == 0 && a[i] < n){
        stringa += a[i];
    }
}
if(x!=0){
    if(stringa != ""){
        console.log(stringa);
    }
}