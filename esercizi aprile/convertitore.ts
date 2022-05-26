// Creare un convertitore di misurazioni, deve permettere la conversione di una misurazione da un unita` di misura ad un altra.
// Il programma dovra` chiedere all'utente quale tipo di misurazione vorrebbe convertire.
// le unita` di misura supportate sono riportate in tabella:
// Gradi    (1)    | centigradi (C) | fahrenheit (F)  |
// Distanza (2)    | kilometri (KM) | miglia (MI)     |
// L'utente puo` specificare il tipo di misurazione che vuole convertire usando 1 per gradi e 2 per distanza e successivamente
// fornire i seguenti valori : 
//      il valore misurato
//      l'unita` di misura originale
// Il programma dovra` restituire in output la conversione corretta .

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 1 
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 32
// Input: "Unita` di misura originale" C
// Output: "Il valore convertito e`: 89,6 F"

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 2
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 100
// Input: "Unita` di misura originale" KM
// Output: "Il valore convertito e`: 62,13 MI"


function celsiusAFahrenhait(gradi:number): number {
    return (gradi*1.8) + 32;
}
function fahrenhaitACelsius(gradi:number): number {
    return (gradi -32) * (5 / 9);
}
function kilometerAMiles(distanza:number): number {
    return distanza * 0.6214;
}
function milesAKilometer(distanza:number): number {
    return distanza * 1.609;;
}


function scelta(risposta:number):string{

    let unitaMisura:string=prompt("Unita` di misura originale");
    let dato:number=prompt("Misurazione originale");

    if (risposta == 1){

        if (unitaMisura == "c"){
        
         return "Il valore convertito e`" + celsiusAFahrenhait(dato) + " F";

        }else if (unitaMisura == "f"){

            return "Il valore convertito e`" + fahrenhaitACelsius(dato) + " C";

        }else return "non possiamo convertire questa unita di misura"

    }else if(risposta == 2){
        if (unitaMisura == "km"){

           return "Il valore convertito e`" + kilometerAMiles(dato) + " MI";

        }else if (unitaMisura == "mi"){

           return "Il valore convertito e`" + milesAKilometer(dato) + " KM";

        }
    }else return "non possiamo convertire questa unita di misura"
}
/////////////////////////////////////////////////////////////

let misura:number = prompt("Che tipo di misurazione vuoi convertire?");

console.log(scelta(misura));
