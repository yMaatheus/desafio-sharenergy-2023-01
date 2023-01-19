type HomePagesType = {
  page: number,
  previousPage: () => void,
  nextPage: () => void,
  setPage: (page: number) => void
}

const HomeNavPages = ({ page, previousPage, nextPage, setPage }: HomePagesType) => {
  return (
    <section className='buttons'>
      <button type='button'
        onClick={() => setPage(1)}>
        Primeira Pagina
      </button>
      <button type='button'
        onClick={previousPage}>
        Voltar
      </button>
      <span>{page}</span>
      <button type='button'
        onClick={nextPage}>
        Próxima Pagina
      </button>
      <button type='button'
        onClick={() => setPage(100)}>
        Última Pagina
      </button>
    </section>
  );
}

export default HomeNavPages;