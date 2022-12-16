const FilterByLocation = (props) => {
  const handleInput = (ev) => {
    props.handleFilterLocation(ev.target.value);
  };
  return (
    <>
      <label htmlFor="location">Location:</label>
      <input
        className="inputLocation"
        value={props.filterByLocation}
        onInput={handleInput}
        type="text"
        name="location"
        id="location"
      ></input>
    </>
  );
};

export default FilterByLocation;
