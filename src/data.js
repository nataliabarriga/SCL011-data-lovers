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

window.calculation = {
  Alive: (dataRickAndMorty) =>{
    const alive = dataRickAndMorty.filter(element =>{
      return element.status == "Alive";
    });
    return alive;
  },

  Female:(dataRickAndMorty) =>{
    const female= dataRickAndMorty.filter(element => {
      return element.gender == "Female";
    });
    return female;
  },

  Humanoid: (dataRickAndMorty)=>{
    const humanoid = dataRickAndMorty.filter (element =>{
      return element.species == "Humanoid";
    });
    return humanoid;
  },
  computeStatsAlive: (dataRickAndMorty) => {
    const percentStatus = (window.calculation.Alive(dataRickAndMorty).length * 100 /  dataRickAndMorty.length).toFixed(0);
    return percentStatus;
  },
  computeStatsFemale: (dataRickAndMorty) => {
    const percentStatus = (window.calculation.Female(dataRickAndMorty).length * 100 /  dataRickAndMorty.length).toFixed(0);
    return percentStatus;
  },
  computeStatsHumanoid: (dataRickAndMorty) => {
    const percentStatus = (window.calculation.Humanoid(dataRickAndMorty).length * 100 /  dataRickAndMorty.length).toFixed(0);
    return percentStatus;
  },
}


  window.episodes = {
    episode: (dataRickAndMorty, conditionE) => {
      let filteredEpisodes = [];
      for (let i=0; i < dataRickAndMorty.length; i++) {
        for (let j=0; j < dataRickAndMorty[i].episode.length; j++) {
          if (dataRickAndMorty[i].episode[j] == conditionE) {

            filteredEpisodes.push(dataRickAndMorty[i]);
          }
        }
      }
      console.log(filteredEpisodes)
    return filteredEpisodes;
    

    }
    
  }

