import React from "react";
import styles from "./About.module.css";
import me from "../assets/me1.png";
import react from "../assets/atom.png";
import javascript from "../assets/java-script.png";
import css from "../assets/css.png";
import html from "../assets/html-5.png";

export const About = () => {
  return (
    <div name="about" className={styles.about}>
      <div>
        <img src={react} alt="react icon" className={styles.about__reacticon} />
        <img
          src={javascript}
          alt="javascript icon"
          className={styles.about__javascript}
        />

        <img src={me} alt="me" className={styles.about__me} />
        <img src={css} alt="css icon" className={styles.about__cssicon} />
        <img src={html} alt="html icon" className={styles.about__htmlicon} />
      </div>
      <div className={styles.about__text}>
        <p>
          Hello, my name is Alina and I have over 2 years of experience as a
          front-end developer. I've worked on various projects, ranging from
          building responsive web applications to optimizing website
          performance.
        </p>
        <br />
        <p>
          I'm proficient in HTML5, CSS3, and JavaScript, and I have hands-on
          experience with popular frameworks such as React and Redux. In my
          previous roles, I've been responsible for developing responsive web
          pages, implementing user interface designs, optimizing website
          performance, and collaborating with cross-functional teams to deliver
          successful projects.
        </p>
        <br />
        <p>
          I believe that effective teamwork and communication are crucial in any
          development project.I actively participate in team meetings, provide
          regular updates on my progress, and seek feedback from my team members
          to continuously improve my work.
        </p>
      </div>
    </div>
  );
};
