import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`w-100 text-center bg-main ${styles.footer} p-4`}>
      <p className="m-auto p-0 text-sec">
        This Project was made using React by:{" "}
        <span className="fw-bold">Abdelrhman Sherif</span>
        <br />
        Copyright &copy;2023. All rights reserved by Designer
      </p>
    </footer>
  );
};

export default Footer;
