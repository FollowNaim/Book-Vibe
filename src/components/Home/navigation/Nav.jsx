import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-border mb-4 sticky top-0 bg-white z-50">
      <NavLink to={"/"}>
        <div>
          <h1 className="text-2xl font-bold">Book Vibe</h1>
        </div>
      </NavLink>
      <div className="hidden md:block">
        <ul id="navlinks" className="flex items-center gap-6 text-primary/90">
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
