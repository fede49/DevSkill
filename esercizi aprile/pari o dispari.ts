/* esercizi 19/04
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia PARI (EVEN) o DISPARI (ODD)
a schermo :
Input: 2
Output:  "Il numero e` pari "
Input: 3
"Il numero e` dispari "
*/

let input:number=prompt("inserisci il numero");

if(input%2==0){
    console.log("Il numero e` pari");
}
else{
    console.log("Il numero e` dispari");
}



switch (input%2) {
    case 0 : {console.log("è pari"); break;}
    default : { console.log("è dispari"); break;}
}
