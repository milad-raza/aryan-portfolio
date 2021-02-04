import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1 className={styles.heading}>Project's</h1>
      <div className={styles.projectsSection}>
        <div className={styles.projectInfo}>
            <ProjectCard />
        </div>
        <div className={styles.projectInfo}>
            <ProjectCard />
        </div>
      </div>
    </div>
  );
}
