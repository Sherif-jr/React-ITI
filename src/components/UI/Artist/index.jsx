import React from "react";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Artist.module.css";

const Artist = ({
  artistImage,
  artistName,
  artistCaption,
  artistDesctription,
  className,
}) => {
  return (
    <div className={className}>
      <div className="row">
        <div className="col-md-6 artist-img">
          <img src={artistImage} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 artist-info mt-5">
          <h2 className="spicy-font h4">{artistName}</h2>
          <h3 className="spicy-font h6 mb-2">{artistCaption}</h3>
          <p>{artistDesctription}</p>
          <ul className={styles.ul}>
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
                <FontAwesomeIcon icon={faDribbble} />
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-sec ${styles.brandLink}`}>
                <FontAwesomeIcon icon={faBehance} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Artist;
