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

  const insideCards = document.createElement("div");
  insideCards.className = "insideCards";

  const imgCharacter=document.createElement("img");
  imgCharacter.src = show.image;
  
  const nameCharacters = document.createElement("h3");
  nameCharacters.innerHTML = show.name;

  const statusCharacters = document.createElement("p")
  statusCharacters.innerHTML = show.status;

  const genderCharacters = document.createElement("p");
  genderCharacters.innerHTML = show.gender;

  insideCards.appendChild(imgCharacter);
  insideCards.appendChild(nameCharacters);
  insideCards.appendChild(statusCharacters);
  insideCards.appendChild(genderCharacters);

  showData.appendChild(insideCards);

  showData.innerHTML;
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
btnCuriosities1.addEventListener("click", () =>{
  
  showCalculation.innerHTML = 
  `<div class="modalWrap1" id="modalWrap1" >
    <div class="percentBox">
      <a class="modalCLose" href="#">X</a>
      <h2>El ${aliveCalculation}% de los personajes están vivos</h2>
    </div>
  </div>
  `;
})

const btnCuriosities2 = document.getElementById("curiosities2");
btnCuriosities2.addEventListener("click", () =>{
  
  showCalculation.innerHTML = 
  `<div class="modalWrap2" id="modalWrap2">
  <div class="percentBox">
    <a class="modalCLose" href="#">X</a>
    <h2>El ${femaleCalculation}% de los personajes son mujeres</h2>
  </div>
</div>
`;
})

const btnCuriosities3 = document.getElementById("curiosities3");
btnCuriosities3.addEventListener("click", () =>{

  showCalculation.innerHTML =
  `<div class="modalWrap3" id="modalWrap3">
  <div class="percentBox">
    <a class="modalCLose" href="#">X</a>
    <h2>El ${humanoidCalculation}% de los personajes son humanoides</h2>
  </div>
</div>
`;
});
