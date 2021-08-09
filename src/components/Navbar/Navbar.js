import Link from "next/link";
import { BiSun } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navigation">
        <ul>
            <li>Luis</li>
        </ul>
        <ul>
            <li>About me</li>
            <li>Proyectos</li>
            <BiSun />
        </ul>
    </nav>
  );
};

export default Navbar;
