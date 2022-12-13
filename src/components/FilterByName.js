const FilterByName = (props) => {
  return (
    <>
      <form>
        <input
          onChange={props.handleFilterName}
          value={props.FilterByName}
          type="text"
          name="name"
          id="name"
          placeholder="Ej:Rick"
        ></input>
      </form>
    </>
  );
};

export default FilterByName;
