import { Link } from "react-router-dom";
const CharacterCard = ({ character }) => {
  return (
    <li className="card">
      <Link to={`character/${character.id}`}>
        <div className="card__text">
          <img
            src={character.image}
            alt={`photo of ${character.name}`}
            title={`photo of ${character.image}`}
          />

          <h3>{character.name}</h3>
          <p>{character.species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
