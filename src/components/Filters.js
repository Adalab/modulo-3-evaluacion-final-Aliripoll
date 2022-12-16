import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByLocation from "./FilterByLocation";

const Filters = (props) => {
  //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section">
      <form className="section__form" onSubmit={handleSubmit}>
        <FilterByName
          className="section__form--name"
          filterByName={props.filterByName}
          handleFilterName={props.handleFilterName}
        />
        <FilterBySpecies
          className="section__form--species"
          filterBySpecies={props.filterBySpecies}
          handleFilterSpecies={props.handleFilterSpecies}
        />
        <FilterByLocation
          className="section__form--species"
          filterByLocation={props.filterByLocation}
          handleFilterLocation={props.handleFilterLocation}
        />
        <button className="btn" type="reset" onClick={props.handleReset}>
          Reset
        </button>
      </form>
    </section>
  );
};

export default Filters;
