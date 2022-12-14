import CharacterCard from "./CharacterCard";
import FilterByName from "./FilterByName";

const CharacterList = ({ dataCharacter, filterByName }) => {
  const characterElement = dataCharacter.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (dataCharacter.length !== 0) {
    return (
      <>
        <section>
          <ul>{characterElement}</ul> {/* Articulos */}
        </section>
      </>
    );
  } else {
    return (
      <p>No hay ningún personaje que coincida con el texto {filterByName}</p>
    );
  }
};

export default CharacterList;
