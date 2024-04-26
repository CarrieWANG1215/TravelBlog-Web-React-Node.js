import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=asia">
            <h6>Asia</h6>
          </Link>
          <Link className="link" to="/?cat=america">
            <h6>America</h6>
          </Link>
          <Link className="link" to="/?cat=europe">
            <h6>Europe</h6>
          </Link>
          <Link className="link" to="/?cat=africa">
            <h6>Africa</h6>
          </Link>
          <Link className="link" to="/?cat=oceania">
            <h6>Oceania</h6>
          </Link>
          <Link className="link" to="/?cat=antarctica">
            <h6>Antarctica</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
