/* Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni";
*/
function anni(corrente:number,nascita:number):number{
   
    return corrente-nascita;
}

let anno_corrente:number = prompt ("Inserisci anno corrente");
let anno_nascita:number = prompt ("Inserisci anno nascita");

console.log(anni(anno_corrente,anno_nascita))