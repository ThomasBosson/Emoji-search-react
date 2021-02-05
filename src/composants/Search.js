// Initialisation de l'événement onChange qui se produira à chaque recherche ou modification de l'input
// search est la valeur du state - setSearch est l'évent qui permettra le changement de l'état de la valeur search.

const Search = ({ search, setSearch }) => {
  return (
    <div className="header">
      <span>😎 Emoji Search 😎</span>
      <input
        type="text"
        name="search"
        placeholder="What emoji are you looking for ?"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
    </div>
  );
};

export default Search;
