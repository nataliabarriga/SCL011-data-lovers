/* FILTRADO */
/*filterData(data, condition)*/
window.filter = {
  species: (dataRickAndMorty,condition) =>{
    const dataFilter = dataRickAndMorty.filter(element => {
      return element.species == condition;
    });
    return dataFilter;
  }
}

window.sort = {
  order: (dataRickAndMorty,sortOrder) =>{
    if (sortOrder=="az"){
      const sortData = dataRickAndMorty.sort((a,b)=>{
        return a.name.localeCompare(b.name);
      })
      return sortData;
    }
    else {
      const sortDataZ = dataRickAndMorty.sort((a,b)=>{
        return b.name.localeCompare(a.name);
      })
      return sortDataZ;        
    }
  } 
}