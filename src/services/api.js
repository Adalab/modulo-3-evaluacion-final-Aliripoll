const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character');
        .then ((response) => response.json())
        .then ((data) => {
            const cleanData = data.map((eachData) => {
                return {
                    id: eachData.id,
                    image: eachData.imageUrl,
                    name: eachData.name,
                    species: eachData.species
                }
 
  })
  return cleanData;
})
};

export default callToApi;