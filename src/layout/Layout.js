import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CallToAction from "../components/CallToAction/CallToAction";

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <CallToAction />
      <Footer />
    </>
  );
};

export default Layout;
