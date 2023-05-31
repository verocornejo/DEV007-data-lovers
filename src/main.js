import data from './data/pokemon/pokemon.js';
//console.log(data)
//declarar las variables que vamos a usar 
const pokemones = data.pokemon; //para ingresar a la data
const contenedor = document.getElementById("contenedor");
// recorrer el objeto usando foreach, declarando las constantes que vamos a usar en la data


pokemones.forEach((pokemon) => {
    const num = pokemon.num;
    const name = pokemon.name;
    const about = pokemon.about;
    const img = pokemon.img;
    const type = pokemon.type;

 //const primerosPokemones = pokemones.slice(0, 9);

 /*primerosPokemones.forEach((pokemon) => {
    const num = pokemon.num;
    const name = pokemon.name;
    const about = pokemon.about;
    const img = pokemon.img;
    const type = pokemon.type;*/
    
    //hacer que la data aparezca en un innerhtml creando un div
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = ` 
    <img src="${img}" alt="${name}" width="60%">
    <h1>${name}</h1>
    <p>#${num}<p> 
    <p>Type: ${type}</p>
    </div>
    `;
    contenedor.appendChild(card);
});


//opcion de filtrar
/* const filterbtn = document.getElementById("btnfilter");

filterbtn.addEventListener("click", (e) => {
contenedor.innerHTML = "";
pokemones.forEach((pokemon) => {
    contenedor.innerHTML += `<p>${pokemon.name}</p>`;
});
})
*/

// funcion de busqueda para que filtre por nombre
//declarar las variables para acceder al dom
const inputBuscar = document.getElementById('searchbox');
const divResultado = document.getElementById('resultado');
//crear un evento input que se inicie cada vez que el usuario ingrese texto en el input
inputBuscar.addEventListener('input', () => {
const busqueda = inputBuscar.value.toLowerCase().trim(); 
const pokemonesFiltrados = pokemones.filter((pokemon) => { //crea un nuevo array con los pokemones filtrados que coincidan con la busqueda
    return pokemon.name.toLowerCase().startsWith(busqueda) && busqueda.length >= 3;
});
mostrarPokemones(pokemonesFiltrados);
});
// crear funcion para mostrar la data en el div con innerhtml
function mostrarPokemones(pokemones) { //funcion que toma el argumento del array de objetos pokemones
let html = '';
pokemones.forEach((pokemon) => { // recorrer el array usando metodo foreach
    html += `
    <div class = infopokemon >
        <img  class= imgpokemon src="${pokemon.img}" alt="${pokemon.name}" >
        <h2>${pokemon.name}</h2>
        <p>${pokemon.about}</p>
        
    </div>
    `;
});
divResultado.innerHTML = html;
}

//
