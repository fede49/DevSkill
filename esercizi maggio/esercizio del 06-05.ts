//create funzioni per ricevere i numeri in input
function input():number {
  return +prompt("Inserisci numero");
}
function input2():number {
  return +prompt("Inserisci numero");
}

//utilizzato il while per verificare ogni volta che il numero sia pari o dispari fino a quando non arrivi a 1
function pariDisp(n:number): number {
  let conta = 1;
while (n!=1){   //fino a quando il numero e diverso da 1 il ciclo continua
  if (n%2 == 0){  //operazione per verificare che sia pari
  n=  n/2;
    }else{
  n = 3*n + 1; //operazione per verificare che sia dispari
  }
  conta++;
}
 return conta;
}

 //utilizzo questa funzione per calcolare la lunghezza massima del ciclo
function massimo(i:number, j:number): number{
let max = 0;
 for (let m = i; m <= j; m++) {
  let nuovoMax = pariDisp(m); //creta nuova variabile che imagazzina i nuovi risultati di max
  if ( nuovoMax > max) {
    max = nuovoMax;
  }
}
return max;
}
let n:number = input();
let m:number = input() ;
//aggiunto if per non far eseguire le operazioni in caso siano maggiori o minori a quelli indicati
if( 0 < n && n > 10000 || 0 < m && m > 10000){
  console.log("i numeri inseriti non sono validi");
  }else{
 console.log(n + " " +m+ " " +(massimo(n,m)));
 }