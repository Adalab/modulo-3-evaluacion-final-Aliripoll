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
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="All characters">All</option>
      </select>
    </>
  );
}

export default FilterBySpecies;
