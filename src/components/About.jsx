import React from "react";
import styles from "./About.module.css";
import me from "../assets/images/me.jpeg";

export default function About() {
  const getAge = (birthday) => {
    const millis = Date.now() - Date.parse(birthday);
    return new Date(millis).getFullYear() - 1970;
  }

  return (
    <div className={styles.about} id="about">
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.aboutSection}>
        <img className={styles.me} src={me} alt="My Pic" />
        <div className={styles.aboutInfo}>
          <h2 className={styles.tittle}>
            <span className={styles.hi}>I am&nbsp;</span>Harsimran Preet Singh
          </h2>
          <br />
          <h3 className={styles.tittleDes}>Inquisitive, energetic computer science student skilled in leadership, with a strong foundation in math and logic. Seeking to leverage solid skills in collaboration and development as a programmer.</h3>
          <br />
          
          <div className={styles.dataCont}>
            <div>
              <p className={styles.data}>Full Name</p>
              <p className={styles.data}>Age</p>
              <p className={styles.data}>Nationality</p>
              <p className={styles.data}>Languages</p>
              <p className={styles.data}>Degree</p>
              <p className={styles.data}>School</p>
            </div>
            <div>
              <p className={styles.dots}>:</p>
              <p className={styles.dots}>:</p>
              <p className={styles.dots}>:</p>
              <p className={styles.dots}>:</p>
              <p className={styles.dots}>:</p>
              <p className={styles.dots}>:</p>
            </div>
            <div>
              <p className={styles.allData}>Harsimran Preet Singh</p>
              <p className={styles.allData}>{getAge("12-08-2001")} Years</p>
              <p className={styles.allData}>Indian</p>
              <p className={styles.allData}>English, Hindi, and Punjabi</p>
              <p className={styles.allData}>Computer Science</p>
              <p className={styles.allData}>California Polytechnic State University, San Luis Obispo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
