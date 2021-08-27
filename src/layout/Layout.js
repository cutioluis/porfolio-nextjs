import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavbarItems from "../components/Navbar/NavbarItems/NavbarItems";
import DropDown from "../components/Navbar/DropDown/DropDown";

const Layout = (props) => {
  return (
    <>
      <Navbar>
        <NavbarItems title="Blog" />
        <NavbarItems title="Links ▶ ">
          <DropDown />
        </NavbarItems>
      </Navbar>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;

