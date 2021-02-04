import React from "react";
import styles from "./Skills.module.css";
import SkillsBar from "./SkillsBar";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import data from "../assets/icons/data.png";
import photoshop from "../assets/icons/photoshop.png";
import communication from "../assets/icons/communication.png";
import github from "../assets/icons/github.png";
import premiere from "../assets/icons/premiere.png";
import finalcut from "../assets/icons/finalcut.png";

export default function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h1 className={styles.heading}>Skill's</h1>
      <div className={styles.allSkills}>
        <div>
          <div className={styles.skillsSection}>
            <SkillsBar image={python} name="Python" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={java} name="Java" percent={60} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={data} name="Data Structures" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={communication} name="Communications" percent={100} />
          </div>
        </div>

        <div>
          <div className={styles.skillsSection}>
            <SkillsBar image={github} name="Github" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={premiere} name="Premiere Pro" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={photoshop} name="Photoshop" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={finalcut} name="Final Cut Pro" percent={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
