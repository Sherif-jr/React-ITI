import React from "react";
import styles from "./MainButton.module.css";
import { Link } from "react-router-dom";
const MainButton = ({ className, style, to, children }) => {
  return (
    <Link
      style={style}
      className={`btn bg-sec rounded-5 ${className} ${styles.mBtn}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MainButton;
