import CharacterCard from "./CharacterCard";
const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });
  return (
    <>
      <ul>{characterElement}</ul>
    </>
  );
};

export default CharacterList;
