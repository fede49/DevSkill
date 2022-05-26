// Creare un software che calcoli il BMI di una persona dato : altezza ( piedi ) , peso ( libre )
// BMI = peso in kg / (statura in metri * statura in metri)
// E stampi in output la corrispettiva costituzione in base alla tabella :
//Sottopeso severo  < 16,5
//Sottopeso da 16,5 a 18,4
//Normale   da 18,5 a 24,9
//Sovrappeso    da 25 a 30
//Obesità primo grado   da 30,1 a 34,9
//Obesità secondo grado da 35 a 40
//gskianto  > 40
// Dopo aver mostrato a schermo il risulato , verra` chiesto all'utente se vuole effettuare una misurazione
// piu` precisa. Se la risposta e` affermativa,
// viene chiesto un parametro aggiuntivo : circonferenza polso ( cm ) e il sesso . Venga stampata la
// rispettiva costituzione seguendo la seguente tabella :
// Donna    Costituzione    Uomo
// < 15     Esile           < 17
// 15-16    Normale         17-18
// > 16     Robusta         > 18
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: si
//Output : Inserisci la circonferenza del polso e il tuo sesso
//Input: 17 M
//Output: La tua costituzione e` : NORMALE
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: No
//Output : Arrivederci

function daPiediAMetri(altezza:number):number{
    return altezza * 0.3;
 }
 function daLibbreAKg(peso:number):number {
    return peso * 0.4;
 }
 
 function calcoloBmi(altezza:number, peso:number):number{
    altezza = daPiediAMetri(altezza);
    peso= daLibbreAKg(peso);
    return peso/(altezza * altezza)
 }
 
 function fasceBmi(bmi:number):string{
    if(bmi<16.5){
       return "Sottopeso Severo"
    }
    if(bmi >= 16.5 && bmi <=18.4){ 
     return "Sottopeso";
    }
    if(bmi >= 18.5 && bmi <=24.9){
     return "Normale";
    }
    if(bmi >= 25 && bmi <=30){
     return "Sovrappeso";
    }
    if(bmi >= 30.1 && bmi <=34.9){
     return "Obestiá Di Primo Grado";
    }
    if(bmi >= 35 && bmi <=40){
    return "Obestiá Di Secondo Grado";
    }
    
     return "Gskianto";
 
 }
 
 function misurazione(sesso:string, polso:number):string{
    let f:string = "f";
     let m:string = "m"
    if (sesso == f) {
     if (polso<15) return "Esile";
     if (polso>=15 && polso <=16) return "Normale";
     else return "Robusta";
 }
 if (sesso == m) {
     if (polso<17) return "Esile";
     if (polso>=17 && polso <=18) return "Normale";
     
 }return "Robusta";
 }
 //////////////////////////////////////////
 
 let feet:number = prompt ("inserisci altezza in feet");
 let libbre:number = prompt ("inserisci peso in libbre");
 
 console.log(fasceBmi(feet,libbre))


let si:string = "si";
let no:string = "no";
let conferma:string = prompt("Vuoi effettuare una misurazione precisa?");
if (conferma == si) {
    let sesso:string= prompt("Inserisci il sesso f/m");
    let polso:number = prompt("Inserisci circonferenza polso");
   console.log(misurazione(sesso, polso));
}else {console.log("Arrivederci")}
