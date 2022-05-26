// DIFFICILE //
// Scrivere un programma prenda una sequenza di numeri, terminata -1.
// Restituisca il numero con il piu` alto numero di occorrenze .

// Input : 2 3 4 2 3 1 0 1 4 4 4 0 9 19 5 -1
// Ouput : Il numero con piu` occorrenze e` 4 

function inputUtente() :number{
    return +prompt("inserisci numero");
  }
  
  let a:number[]=[];
  let input = inputUtente();
  
  while (input != -1){
    a.push(input);
    input =inputUtente();
  }
  let maxOcc=0;
  let n=0
  for (let i=0; i<a.length; i++){
    let conta=1;
    for(let j=i+1; j<a.length;j++){
        if(a[i]===a[j]){
            conta++
        }
    }
    if (conta> maxOcc){
        maxOcc=conta;
        n=a[i];
    }
  }
  console.log(n+" con "+ maxOcc +" occorrenze");