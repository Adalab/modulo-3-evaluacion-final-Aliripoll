import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit}>
        <FilterByName
          filterByName={props.filterByName}
          handleFilterName={props.handleFilterName}
        />
        <FilterBySpecies
          filterBySpecies={props.filterBySpecies}
          handleFilterSpecies={props.handleFilterSpecies}
        />
        <button className="btn" type="reset" onClick={props.handleReset}>
          Reset
        </button>
      </form>
    </section>
  );
};

export default Filters;
