import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectsCard";
import covid from "../assets/images/covid.PNG";
import game from '../assets/images/game.gif'

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1 className={styles.heading}>Projects</h1>
      <center>
      <div className={styles.allp}>
      <ProjectCard
        image={covid}
        title="COVID-19 Live Web App"
        github="https://github.com/harsimran-preet/covid19webapp"
        visit="https://github.com/harsimran-preet/covid19webapp"
        details="Created using Python, Django, and HTML.
        Targeted to provide the right information about the global fight against the COVID-19
        virus.
        Currently holds a view count of 1000 and growing with good overall feedback."
      />

      <ProjectCard
        image={game}
        title="Extraction Game"
        visit="https://github.com/harsimran-preet/theextraction"
        github="https://github.com/harsimran-preet/theextraction"
        details="The Extraction made completely in java is a strategic game where you play as a hero who's task is to kill the enemies before they get access to the secret nuclear codes. You also have performance enhancers in the game on both the good and the bad side. Your strategic deployment of heroes is the only way to stop this attack. Good Luck!"
      />

      </div>
      </center>
    </div>
  );
}
