/*eserciz 19/04
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia POSITIVO o NEGATVO e stampi
a schermo :
Input: 2
Output: "Il numero e` positivo "
Input: -10
Output: "Il numero e` negativo "
*/

function pN(numero:number):string{
    if(numero>0){
        return "E positivo"
    }else if (numero<0){
    return "E negativo"
    }else 
    return "E 0"
}

let input:number=prompt("inserisci il numero")

console.log(pN(input))