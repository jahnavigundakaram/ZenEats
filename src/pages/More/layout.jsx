import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="py-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
