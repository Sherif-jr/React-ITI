import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/images/header-logo.png";
import MainButton from "../../UI/MainButton";
const Header = () => {
  return (
    <header
      className={`sticky-top w-100 bg-main d-flex align-items-center justify-content-center ${styles.navbar}`}
    >
      {/* <div className="px-2 mx-auto h-100"></div> */}
      <nav className="navbar navbar-dark navbar-expand-md text-white w-100">
        <div className="container mx-auto justify-content-between">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto position-relative z-3 gap-4">
              <li className={`nav-item  position-relative ${styles.navItem}`}>
                <NavLink
                  className={({isActive}) =>
                    `nav-link  position-relative text-white ${
                      isActive && styles.activeLink
                    }`
                  }
                  // className={`nav-link  position-relative text-white ${styles.activeLink}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item position-relative ${styles.navItem}`}>
                <NavLink
                  className={({isActive}) =>
                    `nav-link  position-relative text-white ${
                      isActive && styles.activeLink
                    }`
                  }
                  to="/artist"
                >
                  Artist
                </NavLink>
              </li>
              <li className={`nav-item position-relative ${styles.navItem}`}>
                <NavLink
                  className={({isActive}) =>
                    `nav-link  position-relative text-white ${
                      isActive && styles.activeLink
                    }`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className={`nav-item  position-relative ${styles.navItem}`}>
                <NavLink
                  className={({isActive}) =>
                    `nav-link  position-relative text-white ${
                      isActive && styles.activeLink
                    }`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>

            <MainButton className="px-3 py-2 me-3 text-main">
              Get a Ticket
            </MainButton>
            <MainButton
              style={{ color: "var(--main-color)" }}
              className="fw-bold normal-font"
            >
              <i className="bi bi-pause-fill"></i>
            </MainButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
