// Verificare se una parola e` palindroma .
// Una parola si dice palindroma se letta al contrario ha lo stesso valore
// es. otto anna ossesso
// Creare un programma che letta in input una parola,
// restituisca true se la parola e` palindroma
// falso se non lo e`.

function isPalindrome(parola:string):boolean {
     
    for (let i = 0; i < parola.length / 2; i++) {

        if (parola[i] !== parola[parola.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let parola = prompt("Inserisci parola ")
console.log(parola);
console.log(isPalindrome(parola))

