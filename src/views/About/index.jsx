import React from "react";
import MainButton from "../../components/UI/MainButton";
import styles from "./About.module.css";
const About = () => {
  return (
    <main
      className={`overflow-hidden position-relative ${styles.mainAbout}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 ml-md-auto text-center position-relative z-2">
            <h2 className="spicy-font text-sec heading">About The Party</h2>
            <div
              style={{ fontSize: ".95em" }}
              className="text-white text-center d-flex flex-column align-items-center"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <br />
              <br />
              <div className="btn-bar text-center">
                <MainButton className="spicy-font text-main px-3 py-2" to="/">
                  Know More
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sImage}`}/>
    </main>
  );
};

export default About;
