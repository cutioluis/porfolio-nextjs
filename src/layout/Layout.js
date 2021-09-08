import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
