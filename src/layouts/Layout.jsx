import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="work-sans">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
