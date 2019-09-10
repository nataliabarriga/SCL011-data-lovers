/* Declarando la data y haciendola global. */
const dataRickAndMorty = RICKANDMORTY.results;
window.dataRickAndMorty= dataRickAndMorty;

/* Mostrando la data en HTML Dinámico*/
let containerCharacterCards = document.getElementById("result") 
/*Variable que hace llamado al elemento de HTML que contendrá todas las tarjetas de los personajes */

let allCharacterCards = ""; 
/* Variable en donde se concatenarán todas las tarjetas de los personajes con la info correspondiente */

dataRickAndMorty.forEach((show)=>{

  let characterCards = document.createElement("div");
  characterCards.className = "characterCards"; // para dar estilo en css
  characterCards.id = "characterCards";

  let father = document.getElementById("result"); // caja principal
  father.appendChild (characterCards);
  characterCards.innerHTML += `<div class ="insideCards">
                          <img src="${show.image}" alt="imgCharacter">
                          <h3>${show.name}</h3>
                          <a href="#insideCards"></a>
                      </div>`

});
 

/* Función de filtrado */


const filterSelector = document.getElementById("filterSelector");
filterSelector.addEventListener('change', () => {
let condition = filterSelector.value;
  
let filterSpeciesResult = window.filter.species(dataRickAndMorty,condition);
console.log(filterSpeciesResult);

filterSpeciesResult.map((showFilter)=>{
  let printCharacterCards = document.createElement("div");
  printCharacterCards.className = "printCharacterCards"; // para dar estilo en css
  printCharacterCards.id = "printCharacterCards";


  let secondFather = document.getElementById("printResult");
  secondFather.appendChild(printCharacterCards);
  printCharacterCards.innerHTML += `<div class ="insideCardsTwo">
                                      <img src="${showFilter.image}" alt="imgCharacter">
                                      <h3>${showFilter.name}</h3>
                                      <a href="#insideCardsTwo"></a>
                                    </div>`
  
return filterSpeciesResult;

});
  
});

  

