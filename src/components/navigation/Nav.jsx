import { Button } from "@/components/ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <nav className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between border-b border-border mb-4 sticky top-0 bg-white z-50">
      <NavLink to={"/"}>
        <div>
          <h1 className="text-2xl font-bold">Book Vibe</h1>
        </div>
      </NavLink>
      <div className="block md:hidden">
        <Hamburger size={22} toggled={isOpen} toggle={setIsOpen} />
      </div>
      <div
        className={`absolute -z-30 top-16 left-0 w-full md:w-fit md:static bg-black bg-opacity-80 text-white md:bg-white py-8 md:py-0 md:text-primary/90 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-[599px] md:-translate-y-0"
        }`}
      >
        <ul
          id="navlinks"
          className="flex flex-col md:flex-row items-center gap-6 md:text-primary/90"
        >
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/listed"}>
            <li>Listed Books</li>
          </NavLink>
          <NavLink to={"/pages-to-read"}>
            <li>Pages to Read</li>
          </NavLink>
        </ul>
      </div>
      <div className="items-center gap-4 hidden md:flex">
        <Button variant="ghost">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Nav;
