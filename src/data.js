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

/*sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
sortOrder, indica si se quiere ordenar de manera ascendente o descendente.*/

let sortBy = dataRickAndMorty.name;
let sortOrder = document.getElementsByTagName("option").value;/* Tiene que obtener el valor segun lo que diga el usuario, por ejemplo de la a-z=ascendente y de la z-a=descendente */

/* función que me permite ordenar  */
const sortData = (dataRickAndMorty, sortBy, sortOrder) =>{
  let newOrder = [""];
  if (sortOrder == "1"){
    newOrder = dataRickAndMorty.sort((a,b) =>{
      return a.sortBy.localCompare(b.sortBy);
    });
  } else (sortOrder == "2")
    newOrder = dataRickAndMorty.sort ((a,b) =>{
      return a.sortBy.localCompare(b.sortBy).reverse();
    });
console.log(newOrder);
};

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
