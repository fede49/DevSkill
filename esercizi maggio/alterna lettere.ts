// Prese in input due parole
// Creare una terza parola, composta dalle lettere della prima e della seconda in maniera alternata.
// input  : ciaop
// input  : pizza
// output : ciazp

function alterno(a:string, b:string):string{
    let parole3:string = "";
    for (let i=0; i<a.length; i++)
    {
        if (i%2 == 0)
        {
            parole3 = parole3 + a[i]; 
        }
        else
        {
            parole3 = parole3 + b[i]; 
        }
    }
    return parole3;
}

let parola1:string = prompt("Inserisci parola ")
let parola2:string = prompt("Inserisci parola ")



console.log(parola1);
console.log(parola2)
console.log(alterno(parola1, parola2))
