import { Link } from "react-router-dom";
function CharacterDetail(props) {
  return (
    <>
      <article className="detail">
        <Link className="link" to="/">
          {" "}
          Volver{" "}
        </Link>

        <img
          className="detail_img"
          src={props.character.image}
          alt={`photo of ${props.character.name}`}
          title={`photo of ${props.character.image}`}
        />

        <div className="detail_text">
          <h3>Name:{props.character.name}</h3>
          <p>Specie:{props.character.species}</p>
          <p>Origin:{props.character.origin}</p>
          <p>Status:{props.character.status}</p>
          <p>Episodes:{props.character.episodes}</p>
        </div>
      </article>
    </>
  );
}
export default CharacterDetail;
