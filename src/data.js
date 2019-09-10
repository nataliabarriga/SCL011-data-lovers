/* FILTRADO */
/*filterData(data, condition)*/
window.filter = {
  species: (dataRickAndMorty,condition) =>{

    let speciesResult = [""];
    for(let i=0; i < dataRickAndMorty.length; i++){
      if (dataRickAndMorty[i].species == condition){
        console.log(dataRickAndMorty[i].species);
      };
    };
    return speciesResult;
  }
}

window.filter = {
  species: (dataRickAndMorty,condition) =>{
    const marcia = dataRickAndMorty.filter(element => {
      return element.species == condition;
    });
    return marcia;
  }
}




// // como plantear la condicion, si esta bien la estructura 

/*sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
sortOrder, indica si se quiere ordenar de manera ascendente o descendente.*/


// tres parametros - data - sortby - sortOrder


// let sortBy = dataRickAndMorty.name;
// let sortOrder = document.getElementsByTagName("option").value;/* Tiene que obtener el valor segun lo que diga el usuario, por ejemplo de la a-z=ascendente y de la z-a=descendente */


// /* función que me permite ordenar  */
// const sortData = (dataRickAndMorty, sortBy, sortOrder) =>{ // sortby lo que el usuario elige
//   let newOrder = [""]; // variable vacia donde va el resultado del orden 
//   if (sortOrder == "1"){
//     newOrder = dataRickAndMorty.sort((a,b) => { // .sort es para generar el orden con parametros (a-b) para hacer comparacion
//       return a.sortBy.localCompare(b.sortBy); // a.sortBy orden por nombre del primer parametro y localCompare para comparar dos parametros
//     });
//   } else (sortOrder == "2")
//     newOrder = dataRickAndMorty.sort ((a,b) => {
//       return a.sortBy.localCompare(b.sortBy).reverse();
//     });
// console.log(newOrder);
// };



/* SABER SI EL PLANTEADO ESTA BIEN, no tiene paremetros aun */


/* esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window


const example = () => {
  return 'example';
};


window.example = example; */
