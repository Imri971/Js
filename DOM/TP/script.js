
let container = document.getElementById('container');
let container_p = document.getElementById('container_p');
let author = document.getElementById('author');
let btn = document.getElementById("btn");

let chuckNorris = [
    "Chuck Norris peut faire des ronds avec une equerre",
"Chuck Norris peut écrire un traitement de texte avec la souris",
"Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris", 
"Chuck norris se souvient très bien de son futur"];
let color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function random() {
 randomChuck = chuckNorris[Math.floor(Math.random()*chuckNorris.length)];
   return randomChuck;
}
function randomColor() {
    al_Color = color[Math.floor(Math.random()*color.length)];
    return al_Color;
}

function changeText(){
    container_p.textContent = random();
    let rndColor = randomColor();
    document.body.style.backgroundColor = rndColor;
    container.style.color = rndColor;
    btn.style.backgroundColor= rndColor;
}
btn.addEventListener("click", changeText);
console.log(random());
