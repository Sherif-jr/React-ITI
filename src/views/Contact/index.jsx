import React from "react";
import styles from "./ContactPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MainButton from "../../components/UI/MainButton";

const Contact = () => {
  return (
    <main
      className={`position-relative overflow-hidden z-2 pt-5 ${styles.main}`}
    >
      <div className="container mb-5 position-relative z-2">
        <div className="row">
          <div className="col-md-12 ml-md-auto text-center">
            <h2 className="text-sec spicy-font mb-5">Invite someone special</h2>
          </div>
          <div className="col-md-6">
            <form>
              <input
                type="text"
                value="Guest Name"
                onFocus={(e) => {
                  if (e.target.value === "Guest Name") {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "Guest Name";
                  }
                }}
                className={styles.input}
              />

              <input
                type="tel"
                value="Guest Mobile Number"
                onFocus={(e) => {
                  if (e.target.value === "Guest Mobile Number") {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "Guest Mobile Number";
                  }
                }}
                className={styles.input}
              />

              <br />
            </form>
          </div>
          <div className="col-md-6">
            <form>
              <input
                type="email"
                name="email"
                value="Guest Email Address"
                onFocus={(e) => {
                  if (e.target.value === "Guest Email Address") {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "Guest Email Address";
                  }
                }}
                className={styles.input}
              />

              <select style={{ cursor: "pointer" }} className={styles.input}>
                <option value="Ticket Plan">Ticket Plan</option>
                <option value="Single Entry">Single Entry </option>
                <option value="Couple Entry">Couple Entry</option>
                <option value="Combine Entry" selected="">
                  Combine Entry
                </option>
              </select>
              <br />
            </form>
          </div>
          <div className="col-md-12 ml-md-auto text-center mt-5">
            <div className="text-center">
              <MainButton className="spicy-font text-main px-3 py-2">
                Send Invitation
              </MainButton>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-main position-relative p-5 ${styles.mainContact}`}>
        <div className="container position-relative z-2">
          <div className="row mt-4">
            <div className="col-md-12 ml-md-auto text-center">
              <h2 className="text-sec spicy-font">Signup For Newsletter</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <div className="col-md-12 text-center">
                <form action="#">
                  <div
                    className={`input-group rounded-5 ${styles.signUpInput}`}
                  >
                    <input
                      className="form-control bg-transparent text-white-50 spicy-font border rounded-start-5"
                      type="email"
                      name="email"
                      value="Your E-mail Address Here"
                      onFocus={(e) => {
                        if (e.target.value === "Your E-mail Address Here") {
                          e.target.value = "";
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          e.target.value = "Your E-mail Address Here";
                        }
                      }}
                    />

                    <Link
                      to="#"
                      className={`btn bg-sec rounded-end-5 text-main spicy-font ${styles.hoverShadow}`}
                    >
                      Subscribe
                    </Link>
                  </div>
                </form>
                <div className="mx-auto">
                  <h6 style={{ color: "#ccc" }} className="spicy-font">
                    Get Update
                  </h6>
                  <ul className={`${styles.ul}`}>
                    <li>
                      <Link to="#" className={`text-sec ${styles.brandLink}`}>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`text-sec ${styles.brandLink}`}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`text-sec ${styles.brandLink}`}>
                        <FontAwesomeIcon icon={faPinterest} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`text-sec ${styles.brandLink}`}>
                        <FontAwesomeIcon icon={faBehance} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`text-sec ${styles.brandLink}`}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
