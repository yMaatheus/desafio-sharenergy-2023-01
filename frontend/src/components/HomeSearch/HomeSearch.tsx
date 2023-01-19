type HomeSearchType = {
  search: string,
  setSearch: (search: string) => void,
}

const HomeSearch = ({ search, setSearch }: HomeSearchType) => {

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  
  return (
    <section>
      <input
        type="text"
        name="search"
        placeholder='Pesquise por nome, email ou username'
        onChange={handleSearch}
      />
      <button type="button"
        onClick={() => console.log(search)}
      >
        Pesquisar
      </button>
    </section>
  );
}

export default HomeSearch;