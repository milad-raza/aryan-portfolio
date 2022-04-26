import React from "react";
import styles from "./Skills.module.css";
import SkillsBar from "./SkillsBar";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import numpy from "../assets/icons/numpy.png";
import pandas from "../assets/icons/pandas.png";
import swift from "../assets/icons/swift.png";
import sql from "../assets/icons/sql.png";
import wordpress from "../assets/icons/wordpress.png";
import mui from "../assets/icons/mui.png";
import fastApi from "../assets/icons/fastapi.svg";
import intelliJ from "../assets/icons/intellij.png";
import git from "../assets/icons/git.png";
import matplotib from "../assets/icons/matplotlib.png";
import scapy from "../assets/icons/scapy.png";
import tensorFlow from "../assets/icons/tensorFlow.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node-js.png";
import docker from "../assets/icons/docker.png";
import travis from "../assets/icons/travis.png";
import googleCloud from "../assets/icons/googleCloud.png";
import eclipse from "../assets/icons/eclipse.png";
import c from "../assets/icons/c.png";
import cPlusPlus from "../assets/icons/cPlusPlus.png";
import js from "../assets/icons/js.png";
import riscv from "../assets/icons/riscv.png";
import flask from "../assets/icons/flask.png";
import junit from "../assets/icons/junit.png";
import vscode from "../assets/icons/vscode.png";
import visualStudio from "../assets/icons/visualStudio.png";
import pyCharm from "../assets/icons/pycharm.png";

export default function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.allSkills}>
        <div>
          <div className={styles.skillsSection}>
            <SkillsBar image={python} name="Python" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={cPlusPlus} name="C++" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={swift} name="Swift" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={node} name="Node.js" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={wordpress} name="Word Press" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={numpy} name="NumPy" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={scapy} name="Scapy" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={docker} name="Docker" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={vscode} name="VS Code" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={intelliJ} name="Intelli J" percent={100} />
          </div>
        </div>

        <div>
          <div className={styles.skillsSection}>
            <SkillsBar image={java} name="Java" percent={60} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={js} name="JavaScript" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={sql} name="SQL" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={flask} name="Flask" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={mui} name="Material-UI" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={pandas} name="Pandas" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={tensorFlow} name="Tensor Flow" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={travis} name="Travis CI" percent={80} />
          </div>
          <div className={styles.skillsSection}>
          <SkillsBar image={visualStudio} name="Visual Studio" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={eclipse} name="Eclipse" percent={80} />
          </div>
        </div>

        <div>
          <div className={styles.skillsSection}>
            <SkillsBar image={c} name="C" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={riscv} name="RISC-V Assembly" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={react} name="React" percent={80} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={junit} name="J Unit" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={fastApi} name="Fast API" percent={100} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={matplotib} name="Matplotlib" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar image={git} name="Git" percent={90} />
          </div>
          <div className={styles.skillsSection}>
            <SkillsBar
              image={googleCloud}
              name="Google Cloud Platform"
              percent={100}
            />
          </div>
          <div className={styles.skillsSection}>
          <SkillsBar image={pyCharm} name="Py Charm" percent={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
