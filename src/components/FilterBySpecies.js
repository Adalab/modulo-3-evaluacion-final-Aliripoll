function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <>
      <label htmlFor="name">Species:</label>
      <select
        className="selectSpecies"
        name="species"
        id="species"
        value={props.filterBySpecies}
        onChange={handleChange}
      >
        <option value="All" id="All">
          All
        </option>
        <option value="Human" id="Human">
          Human
        </option>
        <option value="Alien" id="Alien">
          Alien
        </option>
      </select>
    </>
  );
}

export default FilterBySpecies;
