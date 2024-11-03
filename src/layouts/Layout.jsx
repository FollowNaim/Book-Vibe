import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="work-sans">
      <Toaster />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
