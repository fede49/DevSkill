/*Scrivere un programma che, letti da input un intero positivo N ed una sequenza di interi positivi 
terminata dal tappo -1, verifichi se esistono almeno N elementi consecutivi della sequenza minori 
o uguali ad N. 
Il programma dovrà stampare la stringa OK se l'intero ricevuto soddisfa la condizione richiesta, NO 
altrimenti.
ATTENZIONE: Si noti che affinché il programma possa essere gestito dal valutatore automatico, 
deve essere inviata in stampa esclusivamente una tra le stringhe OK/NO, senza andare a capo e 
senza spaziature o altre stampe. 
ESEMPI:
 Se N fosse pari a 5 e la sequenza fosse 1 3 5 3 1 2 9 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 3 e la sequenza fosse 1 0 5 2 2 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 4 e la sequenza fosse 1 0 4 8 6 3 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 2 e la sequenza fosse 2 2 3 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 8 e la sequenza fosse 4 2 6 7 8 9 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 1 e la sequenza fosse 0 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 1 e la sequenza fosse -1 il programma dovrebbe stampare NO*/

function inputUtente() :number{
    return +prompt("Inserisci numeri (-1 per terminare) ");
  }
  function inputUtente2() :number{
    return +prompt("Inserisci numero da controllare");
  }
  let a:number [] = [];
  let input = inputUtente();
  while (input != -1){
       a.push(input);
        input = inputUtente();
    }
  function verifica (){
      let sequenza = 0;
      let n:number=inputUtente2();
      for( let i = 0 ; i < a.length ; i++){
        if(a[i] <= n){
              sequenza++;
             if( sequenza == n )
                  return "ok";
               }
          else
              sequenza = 0;
              }
  return "no";
  }
  console.log(verifica());