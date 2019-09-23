/* Declarando la data y haciendola global. */
const dataRickAndMorty = window.RICKANDMORTY.results;

/* Mostrar la data */
const btnCharacters = document.getElementById("characters");
btnCharacters.addEventListener("click", ()=>{

  const showCharacters = document.getElementById("showCharacters");
  showCharacters.style.display = "block";

  const hiddenIndex = document.getElementById("index");
  hiddenIndex.style.display = "none";

  const hiddenCuriosities=document.getElementById("showCuriosities");
  hiddenCuriosities.style.display ="none"

  const hiddenEpisodes = document.getElementById("showEpisodes");
  hiddenEpisodes.style.display = "none";
});  

const showData = document.getElementById("showData");

dataRickAndMorty.forEach((show)=>{
  document.getElementById("showData").value = " ";
  showData.innerHTML += 
      `<div class= "insideCards">
        <img src="${show.image}" alt="imgCharacter">
        <h3>${show.name}</h3>
        <p>${show.species}</p>
        <p>${show.status}</p>
        <p>${show.gender}</p>
      </div>`
});


/* Función de filtrado */
const filterSelector = document.getElementById("filterSpeciesSelector");
filterSelector.addEventListener('change', () => {
let condition = filterSelector.options[filterSelector.selectedIndex].value;
  
let filterSpeciesResult = window.filter.species(dataRickAndMorty,condition);

document.getElementById("showData").innerHTML="";
const finalFilter = filterSpeciesResult.map((showFilter)=>{

  showData.innerHTML += 
  `<div class ="insideCards">
    <img src="${showFilter.image}" alt="imgCharacter">
    <h3>${showFilter.name}</h3>
    <p>${showFilter.species}</p>
    <p>${showFilter.status}</p>
    <p>${showFilter.gender}</p>
  </div>`
});
return finalFilter;
});

/* funcion orden */

const orderSelector = document.getElementById("orderSelector");
orderSelector.addEventListener('change', () => {

  let sortOrder = orderSelector.options[orderSelector.selectedIndex].value;
  let orderResult = window.sort.order(dataRickAndMorty,sortOrder);

document.getElementById("showData").innerHTML="";
const finalOrder = orderResult.map((showOrder)=>{

    showData.innerHTML += 
  `<div class ="insideCards">
    <img src="${showOrder.image}" alt="imgCharacter">
    <h3>${showOrder.name}</h3>
    <p>${showOrder.species}</p>
    <p>${showOrder.status}</p>
    <p>${showOrder.gender}</p>
  </div>`
});
return finalOrder;
});

/* Mostrar Curiosidades */
const btnCuriosities = document.getElementById("curiosities");
btnCuriosities.addEventListener("click", ()=>{

  const showCuriosities = document.getElementById("showCuriosities");
  showCuriosities.style.display = "block";

  const hiddenIndex = document.getElementById("index");
  hiddenIndex.style.display = "none";

  const hiddenCharacters = document.getElementById("showCharacters");
  hiddenCharacters.style.display = "none";

  const hiddenEpisodes = document.getElementById("showEpisodes");
  hiddenEpisodes.style.display = "none";
});  

/* Cálculo */

const showCalculation = document.getElementById("showCalculation");

const aliveCalculation = window.calculation.computeStatsAlive(dataRickAndMorty);
const femaleCalculation = window.calculation.computeStatsFemale(dataRickAndMorty);
const humanoidCalculation = window.calculation.computeStatsHumanoid(dataRickAndMorty);

const btnCuriosities1 = document.getElementById("curiosities1");
btnCuriosities1.addEventListener("click", (calculation) =>{
  
  showCalculation.innerHTML = 
  `<div class="percentBox">
  <h2>El ${aliveCalculation}% de los personajes están vivos</h2>
  </div>
  `;
})

const btnCuriosities2 = document.getElementById("curiosities2");
btnCuriosities2.addEventListener("click", (calculation) =>{
  
  showCalculation.innerHTML = 
  `<div class="percentBox">
  <h2>El ${femaleCalculation}% de los personajes son mujeres</h2>
  </div>
  `;
})

const btnCuriosities3 = document.getElementById("curiosities3");
btnCuriosities3.addEventListener("click", (calculation) =>{
  
  showCalculation.innerHTML = 
  `<div class="percentBox">
  <h2>El ${humanoidCalculation}% de los personajes son humanoides</h2>
  </div>
  `;
})

/* mostrar episodios */

const dataRickAndMortyEpisode = window.RICKANDMORTY.episode;

const btnEpisodes = document.getElementById("episodes");
btnEpisodes.addEventListener("click", ()=>{

  const showEpisodesResult = document.getElementById("showEpisodes");
  showEpisodesResult.style.display = "block";

  const hiddenCuriosities = document.getElementById("showCuriosities");
  hiddenCuriosities.style.display = "none";

  const hiddenCharacters = document.getElementById("showCharacters");
  hiddenCharacters.style.display = "none";

});  

/* episodios */


const seasonSelector = document.getElementById("season");
seasonSelector.addEventListener('change', () => {
let conditionE = seasonSelector.options[seasonSelector.selectedIndex].value;

let episodesResult = window.episodes.episode(dataRickAndMorty,conditionE);


document.getElementById("showDataEpisodes").innerHTML="";
const finalEpisode = episodesResult.map((showDataEpisodes)=>{
  showDataEpisodes.innerHTML += 
  `<div class ="insideCards">
    <h3>${showDataEpisodes.id}</h3>
    <p>${showDataEpisodes.name}</p>
    <p>${showDataEpisodes.episode}</p>
  </div>`

});

return finalEpisode;

 
});