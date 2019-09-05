/* Declarando la data y haciendola global. */
const dataRickAndMorty = RICKANDMORTY.results;
window.dataRickAndMorty= dataRickAndMorty;

/* Mostrando la data en HTML Dinámico*/
let containerCharacterCards = document.getElementById("result") /*Variable que hace llamado al elemento de HTML que contendrá todas las tarjetas de los personajes */

let characterCards = ""; /* Variable en donde se creará la tarjeta de cada personajes con la respectiva info */
let allCharacterCards = ""; /* Variable en donde se concatenarán todas las tarjetas de los personajes con la info correspondiente */

dataRickAndMorty.forEach((show)=>{ /* Llamado a recorrer la dara para obtener la info de cada personaje */
  characterCards = /* Se llama a la variable de las tarjetas para cada personaje y se rellena con la infor en HTML dinámico */
  `<div class="cards">
    <img src="${show.image}" alt="imgCharacter">
    <h3>${show.name}</h3>
  </div>`

  allCharacterCards += characterCards; /* La variable de todos los personajes se iguala y concatena a la variable de cada personaje */
  containerCharacterCards.innerHTML = allCharacterCards; /* En el elemento de html se muestran todos los personajes */
});

/* Función de filtrado */

const filterSelector = document.getElementById("filterSelector");
filterSelector.addEventListener('change', () => {
  let condition = filterSelector.value; /* Variable de la condición, esta nos dará el valor que usuario elija para filtrar */
  console.log(condition);
  
  let filterSpeciesResult = window.filter.species(dataRickAndMorty,condition);  
});