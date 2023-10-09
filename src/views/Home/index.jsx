import React from "react";
import HeroImage from "../../Assets/images/Hero.png";
import styles from "./Home.module.css";
import MainButton from "../../components/UI/MainButton";

const Home = () => {
  return (
    <main className={`w-100 pb-4 ${styles.main}`}>
      <div className="container mx-auto">
        <div className="row full-screen ">
          <div className="col-md-7 position-relative d-none d-md-block">
            <img src={HeroImage} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center text-white text-center">
            <div>
              <h2 className="spicy-font">31th octobar 2018</h2>
              <h5 className="spicy-font ban-txt text-sec fw-bold display-5">
                Halloween Party
              </h5>
              <p style={{ fontSize: ".98em" }} className="text-center">
                Halloween or Hallowe'en (a contraction of All Hallows' Evening)
                also known as Allhalloween, All Hallows' Eve or All Saints' Eve
                is a celebration observed in a number of countries on 31
                October.
              </p>
              <div className="btn-bar text-center">
                <MainButton
                  to="/artist"
                  className="px-3 py-2 me-3 text-main spicy-font"
                >
                  Explore More
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
