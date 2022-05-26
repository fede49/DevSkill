/* Si scriva un programma che presi in input 3 valori, verifichi e stampi a schermo quali tra questi e` il piu` grande
a schermo :
E.S
Input: 3 54 12
Output: Il valore piu` grande e` : 54
*/

let n1 :number = +prompt ("inserisci primo numero");
let n2 :number = +prompt ("inserisci secondo numero");
let n3 :number = +prompt ("inserisci terzo numero");

if(n1>n2){
    if(n1>n3){
        console.log("Il numero piu` grande e` :" + n1);
    }
    else{
        console.log("Il numero piu` grande e` :" + n3);
    }
}
else{
    if(n2>n3){
        console.log("Il numero piu` grande e` :" + n2);
    }
    else{
        console.log("Il numero piu` grande e` :" + n3);
    }
}

//vettori
let numeri:number[]= []
numeri.push(8)
numeri.push(10)
numeri.push(7)



    if(numeri[0] > numeri[1] && numeri[0] > numeri[2]){
    console.log("Il piu grande è il numero" +numeri[0]);}
    
   if (numeri[1] > numeri[0] && numeri[1] > numeri[2]){
    console.log("il piu grande è il numero" +numeri[1]);}
    
   if (numeri[2] > numeri[0] && numeri[2] > numeri[1]) {
    console.log("il piu grande è il numero " +numeri[2]);}
