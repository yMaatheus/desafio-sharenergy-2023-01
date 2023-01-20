import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => (
  <header className={styles.container}>
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
      <NavLink to="clientes" className={styles.link}>
        Clientes
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
