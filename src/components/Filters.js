import FilterByName from "./FilterByName";
//import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterByName
          FilterByName={props.filterByName}
          handleFilterName={props.handleFilterName}
        />
      </form>
    </section>
  );
};

export default Filters;
