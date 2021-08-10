import styles from './Navbar.module.css';
import { RiSunFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li><a href="">Luis</a></li>
      </ul>
      <ul>
        <li><a href="">About me</a></li>
        <li><a href="">Proyectos</a></li>
        <RiSunFill  />
      </ul>
    </div>
  );
};

export default Navbar;
