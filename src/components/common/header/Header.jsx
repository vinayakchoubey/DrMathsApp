import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
            <button
              className='login-btn'
              onClick={() => navigate("/login")} // Navigate to login page
            >
              Login
            </button>
          </div>

          <button
            className='toggle'
            onClick={() => setClick(!click)}
          >
            {click ? (
              <i className='fa fa-times'> </i>
            ) : (
              <i className='fa fa-bars'></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
