import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
          {children}
      <Footer/>
    </>
  );
};

export default Layout;
