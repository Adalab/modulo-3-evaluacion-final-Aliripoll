const CharacterCard = ({ character }) => {
  return (
    <li>
      <article>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.species}</p>
      </article>
    </li>
  );
};

export default CharacterCard;
