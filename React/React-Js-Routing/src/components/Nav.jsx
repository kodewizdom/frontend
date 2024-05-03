import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    //here trying to show that this is a nav bar stay on every page
    <nav className="mt=10 flex justify-center gap-10">
      <NavLink
        style={(e) => {
          // console.log(e)
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink to="/user">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              User
            </span>
          );
        }}
        {/* <span>User</span> */}
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-500" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
