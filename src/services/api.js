const callToApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
          location: character.location.name,
        };
      });

      return cleanData;
    });
};

export default callToApi;
