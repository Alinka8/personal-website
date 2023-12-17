import React from "react";
import styles from "./Home.module.css";
import ArrowIcon from "../assets/right-down.png";

export const Home = () => {
  return (
    <div name="home" className={styles.home}>
      <h1 className={styles.home__header}>Portfolio</h1>
      <span className={styles.home__span}>Frontend Engineer</span>
      <img src={ArrowIcon} alt="Arrow Icon" className={styles.home__icon} />
      <span className={styles.home__title}>Alina Zh</span>
    </div>
  );
};
