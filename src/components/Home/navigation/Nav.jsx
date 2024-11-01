import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-border mb-4 sticky top-0 bg-white">
      <div>
        <h1 className="text-2xl font-bold">Book Vibe</h1>
      </div>
      <div>
        <ul id="navlinks" className="flex items-center gap-6 text-primary/90">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/listed"}>
            <li>Listed Books</li>
          </NavLink>
          <li>Pages to Read</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Nav;
