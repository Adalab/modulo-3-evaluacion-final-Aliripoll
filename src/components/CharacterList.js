import CharacterCard from "./CharacterCard";

const CharacterList = ({ dataCharacter }) => {
  const characterElement = dataCharacter.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <>
      <section>
        <ul>{characterElement}</ul>
      </section>
    </>
  );
};

export default CharacterList;
