function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <>
      <label htmlFor="name">Species</label>
      <select
        name="species"
        id="species"
        value={props.filterBySpecies}
        onChange={handleChange}
      >
        <option value="Human" id="Human">
          Human
        </option>
        <option value="Alien" id="Alien">
          Alien
        </option>
        {/*   <option value="All" id="All">
          All
        </option> */}
      </select>
    </>
  );
}

export default FilterBySpecies;
