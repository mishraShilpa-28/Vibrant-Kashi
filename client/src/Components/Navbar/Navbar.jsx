import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [auth, setAuth] = useAuth();

 const [dropdownVisible, setDropdownVisible] = useState(false);

 const toggleDropdown = () => {
   setDropdownVisible(!dropdownVisible);
 };


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    window.scrollTo(0, 0);
    localStorage.removeItem("auth");
  };

  const addSearchBar = () => {
    if (window.scrollY >= 242) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  };
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  window.addEventListener("scroll", addSearchBar);

  return (
    <>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="" />
        <div className={searchBar ? "search" : "searchNone"}>
          <input type="search" placeholder="🔍 Search" />
        </div>
        <ul className="nav-center n1">
          <li className="nav-1">
            <Link className="sign-btn" to="/">
              Home
            </Link>
          </li>

          <div className="sign-btn">
            <li className="nav-item dropdown">
              <div className="dropbtn" onClick={toggleDropdown}>
                Categories
                {dropdownVisible ? (
                  <FaCaretUp className="dropdown-icon" />
                ) : (
                  <FaCaretDown className="dropdown-icon" />
                )}
              </div>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <Link className="sign-btn" to="/destination">
                    Destinations
                  </Link>
                  <Link className="sign-btn" to="/hotels">
                    Hotels
                  </Link>
                  <Link className="sign-btn" to="/restaurants">
                    Restaurants
                  </Link>
                  <Link className="sign-btn" to="/thingToDo">
                    Things to do
                  </Link>
                  <Link className="sign-btn" to="/eventsFestivals">
                    Events & Festivals
                  </Link>
                </div>
              )}
            </li>
          </div>

          <li className="nav-3">
            <Link className="sign-btn" to="/review-page">
              Reviews
            </Link>
          </li>

          <li className="nav-2">
            <Link className="sign-btn" to="/about-us">
              About-Us
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          {/* <button>
            <Link className="sign-btn" to="/login">
              Sign in
            </Link>
          </button> */}
          {!auth?.user ? (
            <>
              <NavLink
                to="/login"
                className="nav-link sign-btn des"
                onClick={handleClick}
              >
                Sign In
              </NavLink>
            </>
          ) : (
            <>
              <ul className="nav">
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle sign-btn des"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>

                  <li className="dropdown-menu">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                    >
                      Logout
                    </NavLink>
                  </li>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
