
let container = document.getElementById('container');
let container_p = document.getElementById('container_p');
let author = document.getElementById('author');
let btn = document.getElementById("btn");

let chuckNorris = [
    "Chuck Norris peut faire des ronds avec une equerre",
"Chuck Norris peut écrire un traitement de texte avec la souris",
"Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris", 
"Chuck norris se souvient très bien de son futur"," L'ordinateur de Chuck Norris n'a pas de bouton 'CRTL'. Chuck Norris a toujours le contrôle.",
"Chuck Norris a deja reussi a casser 3 pattes a un canard.","En Avril dernier, Chuk Norris a fait un barbecue... et les aéroports européens ont été fermés pendant une semaine...",
"Depuis le 11 septembre 2001 Chuck Norris ne lance plus d'avions en papier.",
" M.Propre était videur et ne voulait pas laisser chuck rentrer en boite, maintenant il est femme de ménage !!",
"Chuck Norris mange ses oranges tout rond: Chuck Norris fait pas de quartier.","Chuck Norris a déjà tabassé l homme invisible parce qu il lui gâchait la vue"];
let color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let authorArray =["Alain-Fournier","Flaubert","Nerval ","Pagnol ","Gide","Bataille","Queneau","Hugo","Ionesco","La Fayette","Sade","Eluard","Zola " ];
function random() {
 randomChuck = chuckNorris[Math.floor(Math.random()*chuckNorris.length)];
   return randomChuck;
}
function randomColor() {
    al_Color = color[Math.floor(Math.random()*color.length)];
    return al_Color;
}
function randomAuthor(){
    al_author = authorArray[Math.floor(Math.random()*authorArray.length)];
    return al_author;
}

function changeText(){
    container_p.textContent = random();
    author.textContent = " - "+ randomAuthor();
    let rndColor = randomColor();
    document.body.style.backgroundColor = rndColor;
    container.style.color = rndColor;
    btn.style.backgroundColor= rndColor;
}
btn.addEventListener("click", changeText);
console.log(random());
