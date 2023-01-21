import { useEffect, useState } from "react";
import { getRandomUser } from "../../services/randomUser";
import { RandomUser } from "../../types/RandomUser";
import HomeNavPages from "../HomeNavPages/HomeNavPages";
import HomeSearch from "../HomeSearch/HomeSearch";
import RandomUserCard from "../RandomUserCard";

const Home = () => {
  const [users, setUsers] = useState<RandomUser[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(""); // Search By Name, Email or username

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRandomUser(page, 50);
      const results = response.data.results;

      setUsers(results);
    };

    getUsers();
  }, [page]);

  const nextPage = () => page + 1 < 100 && setPage(page + 1);
  const previousPage = () => page > 1 && setPage(page - 1);

  const map = (user: RandomUser) => (
    <RandomUserCard key={user.email} {...user} />
  );

  const filter = (user: RandomUser) =>
    user.name.first.includes(search) ||
    user.name.last.includes(search) ||
    user.email.includes(search) ||
    user.login.username.includes(search);

  return (
    <div>
      <HomeSearch search={search} setSearch={setSearch} />
      <HomeNavPages
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
        setPage={setPage}
      />
      <section>
        {search ? users?.filter(filter).map(map) : users?.map(map)}
      </section>
    </div>
  );
};

export default Home;
