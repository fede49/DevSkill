// Prese in input due parole
// Creare una terza parola, composta dalla prima e dall'inverso della seconda.
// input  : ciao
// input  : pizza
// output : ciaoazzip

function inversione(a:string) {
    let b = [];
    for (let i = a.length - 1, j = 0; i >= 0; i--, j++)
      b[j] = a[i];
    return b.join('');
  }
  
  let parola1:string = prompt("Inserisci parola ")
  let parola2:string = prompt("Inserisci parola ")
  
  console.log(parola1);
  console.log(parola2)
  
  console.log(parola1 + inversione(parola2))