/* import { Link, useParams } from "react-router-dom";
function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const foundCharacter = findCharacter(params.id);
  return (
    <>
      <article>
        <Link to="/"> Volver </Link>
        <img
          src={foundCharacter.image}
          alt={`photo of ${foundCharacter.name}`}
          title={`photo of ${foundCharacter.image}`}
        />
        <h3>Name:{foundCharacter.name}</h3>
        <p>Specie:{foundCharacter.species}</p>
        <p>Origin:{foundCharacter.origin.name}</p>
        <p>Status:{foundCharacter.status}</p>
        <p>Episodes:{foundCharacter.episodes}</p>
      </article>
    </>
  );
} */

import { Link } from "react-router-dom";
function CharacterDetail(props) {
  return (
    <>
      <article>
        <Link to="/"> Volver </Link>
        <img
          src={props.character.image}
          alt={`photo of ${props.character.name}`}
          title={`photo of ${props.character.image}`}
        />
        <h3>Name:{props.character.name}</h3>
        <p>Specie:{props.character.species}</p>
        <p>Origin:{props.character.origin.name}</p>
        <p>Status:{props.character.status}</p>
        <p>Episodes:{props.character.episodes}</p>
      </article>
    </>
  );
}
export default CharacterDetail;
