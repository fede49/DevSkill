// DIFFICILE //
// Scrivere un programma restituisca i primi 30 numeri primi.
// Un numero si dice primo se e` divisibile SOLO e soltanto per se stesso e per 1  


//con i vettori
function numeroPrimo(nP:number):Boolean{

    for (let i=2; i<=nP/2; i++){
        if(nP % i == 0){
            return false;
        }
    }
    return true;
}
let A:number [] = [];
let numero:number = 113;
for(let i = 2; i<= numero; i++){
    if(numeroPrimo(i)){
        A.push(i);
    }
}
console.log("sono "+A.length +".  " + A);


//senza vettori 
let contaNP = 0
let n = 2
let messaggio:string ="i primi 30 numeri primi sono:"
while (contaNP < 30) {
  let prime: boolean = true
  for (let i = 2; i < n ; i++) {
    if (n % i == 0) {
      prime = false
    }
  }
  if (prime) {
    messaggio+=n+ " "
    contaNP++
  }
  n++
}
console.log(messaggio);