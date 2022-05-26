function inputUtente() :number{
    return +prompt("scegli quante mura ci sono(max 50) ");
  }
  
let salti:number = inputUtente() ;
let a:number[] = [];
let su = 0;
let giu = 0;
 if(salti!<0 || salti!>50){ 
   console.log("il numero inserito non e valido")
   }else{
    for (let i=0; i<salti; i++) {
        let altezza:number = +prompt("scegli l'altezza del muro numero " + (i+1));
        a.push(altezza);
    }
        for (let i=0; i<a.length-1; i++){
            let j = a[i+1];
            if (a[i] > j) {
                giu++
            } else if (a[i] < j){
                su++
            }
        } console.log(su, giu)
}