import { Link } from "react-router-dom";
function CharacterDetail(props) {
  /*   const handleChange = (ev) => {
      props.handleFilterSpecies(ev.target.value);
    }; */

  return (
    <>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
        <Link to="/"> Volver </Link>
      </article>
    </>
  );
}

export default CharacterDetail;
