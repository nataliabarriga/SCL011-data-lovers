/* Declarando la data y haciendola global. */
const dataRickAndMorty = RICKANDMORTY.results;
window.dataRickAndMorty= dataRickAndMorty;

/* Mostrar la data */
const btnCharacters = document.getElementById("characters");
btnCharacters.addEventListener("click", ()=>{

  const showCharacters = document.getElementById("showCharacters");
  showCharacters.style.display = "block";
  const hiddenIndex = document.getElementById("index");
  hiddenIndex.style.display = "none";

});  

const showData = document.getElementById("showData");

dataRickAndMorty.forEach((show)=>{
  document.getElementById("showData").value = " ";
  showData.innerHTML += 
      `<div class= "insideCards">
        <img src="${show.image}" alt="imgCharacter">
        <h3>${show.name}</h3>
      </div>`
});

 

/* Función de filtrado */
const filterSelector = document.getElementById("filterSpeciesSelector");
filterSelector.addEventListener('change', () => {
let condition = filterSelector.options[filterSelector.selectedIndex].value;
  
let filterSpeciesResult = window.filter.species(dataRickAndMorty,condition);
console.log(filterSpeciesResult);

document.getElementById("showData").innerHTML="";
const finalFilter = filterSpeciesResult.map((showFilter)=>{

  showData.innerHTML += 
  `<div class ="insideCardsTwo">
    <img src="${showFilter.image}" alt="imgCharacter">
    <h3>${showFilter.name}</h3>
    <a href="#insideCardsTwo"></a>
  </div>`
});
return finalFilter;
});

const orderSelector = document.getElementById("orderSelector");
orderSelector.addEventListener('change', () => {

  let sortOrder = orderSelector.options[orderSelector.selectedIndex].value;
  let orderResult = window.sort.order(dataRickAndMorty,sortOrder);

document.getElementById("showData").innerHTML="";
const finalOrder = orderResult.map((showOrder)=>{

    showData.innerHTML += 
  `<div class ="insideCardsTwo">
    <img src="${showOrder.image}" alt="imgCharacter">
    <h3>${showOrder.name}</h3>
  </div>`
});
return finalOrder;
});


