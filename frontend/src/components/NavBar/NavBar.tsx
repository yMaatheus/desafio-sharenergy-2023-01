import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import LogoImg from "../../assets/logo.png";

const NavBar = () => (
  <header className={styles.container}>
    <img src={LogoImg} alt="Logo" className={styles.logo} />
    <nav>
      <NavLink to="/" className={styles.link}>
        Inicial
      </NavLink>
      |
      <NavLink to="cat" className={styles.link}>
        Cat
      </NavLink>
      |
      <NavLink to="dog" className={styles.link}>
        Dog
      </NavLink>
      |
      <NavLink to="customer" className={styles.link}>
        Clientes
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
