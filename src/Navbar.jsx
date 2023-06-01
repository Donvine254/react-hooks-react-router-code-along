import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className="ui fluid secondary menu">
        <NavLink to="/" className="ui header item" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="ui header item"
          activeClassName="active">
          About
        </NavLink>
        <NavLink
          to="/login"
          className="ui header item"
          activeClassName="active">
          Login
        </NavLink>
        <div class="right menu">
          <div class="ui item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">Logout</a>
        </div>
      </div>
    );
  }
  export default NavBar