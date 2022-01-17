import { NavLink } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";

function Nav() {
  return (
    <>
      <nav className="header__maincontiner">
        <NavLink to="/" exact={true} strict>
          <img src={Logo} alt="logo_image" />
        </NavLink>

        <ul className="nav">
          <li>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/add/content"
              strict
              exact={true}
            >
              <h4>Add Content</h4>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
