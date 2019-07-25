let buttons = document.getElementsByClassName("buttons");
let number = document.getElementById("number");
let reset = document.getElementById("reset");
let egal =  document.getElementById("egal");




function calculator() {
    let result = number.textContent;
    if (this.textContent == "=") {
        number.textContent = eval(result);

    }else if (this.textContent == "C") {
       number.textContent =  clear();
    }else if (this.textContent == "x") { //remplacer le signe x en * pour l'opération
        number.textContent = number.textContent  + "*";
    }else if (this.textContent == "←") {
        let sup = number.textContent;
         number.textContent = sup.substring(0, sup.length - 1); //Supprimer le dernier caractère
    }
    else{
    number.textContent = number.textContent + this.textContent ;
    result = number.textContent;
}
     
 
 }
 
 //***************************************************** */
 
 function calcul() {

 }
 
 egal.addEventListener("click", calcul); 
 
 //***************************************************** */
 
 function clear(){ //on reinitialise le compteur
 
    return number.textContent = " ";
 
 }
 
 reset.addEventListener("click",clear);
 
 //**************************************************** */
 
 for (let i = 0; i < buttons.length; i++) {
 
     buttons[i].addEventListener("click", calculator);
 
    
 
 }
