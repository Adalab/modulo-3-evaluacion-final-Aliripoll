import FilterByName from "./FilterByName";
//import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return <FilterByName handleFilterName={props.handleFilterName} />;
};

export default Filters;
