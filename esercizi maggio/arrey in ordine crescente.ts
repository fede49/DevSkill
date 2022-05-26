function inputUtente() :number{
    return +prompt("Inserisci numeri array a");
  }
let a:number [] = [];
let n=5
for(let i:number = 0; i < n ; i++){
      a.push(inputUtente());
  }console.log(a)
for (let i=0; i<a.length-1; i++) {
      let indice = i;
      for (let j=i+1; j<a.length; j++)
         if (a[j] < a[indice]) 
            indice = j;
      
      let b = a[indice];  
      a[indice] = a[i];
      a[i] = b;
   }
console.log(a)
