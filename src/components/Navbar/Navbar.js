import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>
        {props.children}
      </ul>
    </nav>
  );
};

export default Navbar;
