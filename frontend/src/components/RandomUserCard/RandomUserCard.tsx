import { RandomUser } from "../../types/RandomUser";

const RandomUserCard = (props: RandomUser) => {
  const { email, picture, name, dob, login } = props;
  return (
    <section key={email}>
      <img src={picture.large} alt={login.username} />
      <h3>{name.title} {name.first} {name.first}</h3>
      <h4>Contato: {email}</h4>
      <h4>Idade: {dob.age}</h4>
      <h4>Username: {login.username}</h4>
    </section>
  );
}

export default RandomUserCard;