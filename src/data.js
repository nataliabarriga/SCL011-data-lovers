/* Manejo de data */
const dataRickAndMorty = RICKANDMORTY.results;
window.dataRickAndMorty= dataRickAndMorty;

/* FILTRADO */
/*filterData(data, condition)*/
/* Condition1 species */
let condition1 = document.getElementById("1");
const filterData = (dataRickAndMorty,condition1) =>{
  let filterResult = [""];
  for(let i=0; i < dataRickAndMorty.length; i++){
    if (dataRickAndMorty[i] == condition1){
        filterResult.push(dataRickAndMorty[i].species);
        console.log(filterResult);
    };
  };
}

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
