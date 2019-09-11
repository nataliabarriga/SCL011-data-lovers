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

window.sort = {
  order: (dataRickAndMorty,sortOrder)=>{
    if (sortOrder == "az"){
     const sortDataAZ = dataRickAndMorty.sort((a,b)=>{
        return (a.name < b.name) ? -1:1
      })
      return sortDataAZ;
    } 
    else {
      const sortDataZA = dataRickAndMorty.sort((a,b)=>{
        return (a.name > b.name) ? -1:1
      })
      return sortDataZA;
    }
  }
}
