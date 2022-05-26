/*Scrivere un programma che, letta da input una sequenza di interi terminata da un tappo pari a 0 
(ZERO), stampi SI se la sequenza ha un andamento strettamente crescente fino ad un certo punto e un 
andamento strettamente decrescente dal quel punto in poi; stampi NO altrimenti.
ATTENZIONE: Stampare solo una delle stringhe SI/NO senza aggiungere altre spaziature o andare a 
capo.
ESEMPI
- Se la sequenza in input fosse 
0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse 
3 0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse 
1 3 0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse 
3 1 0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse 
1 2 4 3 2 0
Il programma dovrebbe stampare SI.
- Se la sequenza in input fosse
-1 2 1 1 0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse
-1 -1 2 1 0
Il programma dovrebbe stampare NO.
- Se la sequenza in input fosse
-1 2 25 23 13 9 7 2 1 -1 0
Il programma dovrebbe stampare SI.
- Se la sequenza in input fosse
-1 2 25 2 23 13 9 7 2 1 -1 0
Il programma dovrebbe stampare NO*/

function inputUtente() :number{
    return +prompt("Inserisci numeri (0 per terminare) ");
  }

  let a:number [] = [];
  let input = inputUtente();
    while (input != 0){
         a.push(input);
          input = inputUtente();
      }
  function controlla( a:number[] ) : string{
      let verifica = false;
  
      if( a[0] < a[1]){
  
          for ( let i = 1 ; i < a.length-1 ; i++){
  
              for( let j = i ; j < a.length ; j++){
                  if(a[i] < a[i+1]){
                    if( verifica == true )
                          return "no";
                   }else if(a[i] > a[i+1]){
                       verifica = true;
                    }else
                      return "no";
              }
          }
      }
      if(verifica == false)
          return "no";
          return "si";
   }
  console.log(controlla(a))