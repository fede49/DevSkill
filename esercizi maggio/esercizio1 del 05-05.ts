/*
Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
i valori dell'array B
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 8, 4 ,10 ,6];
 */
  function inputUtente() :number{
    return +prompt("Inserisci numeri array a");
  }
  function inputUtente2() :number{
    return +prompt("Inserisci numeri array b");
  }
  function dimensione() :number{
    return +prompt("Inserisci dumensione tra 5 o 10");
  }
  
  let n=dimensione();
  
  if(n<5 || n >10){
    console.log("la dimensione non e consentita")
  }else{
  
  let a:number [] = [];
  let b:number [] = [];
  
  
  
  for(let i:number = 0; i < n ; i++){
      a.push(inputUtente());
  }
  for(let i:number = 0; i < n; i++){
      b.push(inputUtente2());
  }
  console.log(a);
  console.log(b);
  
  let c:number [] = [];
  for(let i:number = 0; i < n ; i++){
      if(i%2==0){
          c.push(a[i]);
      }
      else{
          c.push(b[i]);
      }
  }console.log(c);
  }