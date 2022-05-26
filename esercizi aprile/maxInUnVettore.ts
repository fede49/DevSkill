//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 ( valori scelti a piacimento)
//E.S 
// let A:number = [1,5,20,15,500,230];
// Output : 
let A :number [] = [2,45,65,55,3,1,24,54];

let max:number= A[0];
for(let i=1; i<A.length;i++){
  if (A[i]> max){
    max=A[i];
  }
}
console.log(max);