import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="bg-dark py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="" />
        <div className="text-white d-flex gap-4  ">
          <Link className="text-white" to="/">
            Shop
          </Link>

          <Link className="text-white" to="/orders">
            Orders
          </Link>

          <Link className="text-white" to="/inventory">
            Manage Inventory
          </Link>

          {user ? (
            <Link onClick={handleLogOut} className="text-white">
              Sign Out
            </Link>
          ) : (
            <>
              <Link className="text-white" to="/login">
                Login
              </Link>

              <Link className="text-white" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
