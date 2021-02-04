import React from "react";
import styles from "./Resume.module.css";
import { BsBriefcase } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <div className={styles.resume} id="resume">
      <h1 className={styles.heading}>Resume</h1>
      <div className={styles.resumeSection}>
        <div className={styles.head}>
          <BsBriefcase size={28} />
          &nbsp; &nbsp;
          <h1 className={styles.headIn}>Working Experience</h1>
        </div>
        <br />
        <br />
        <div className={styles.card}>
          <h2 className={styles.date}>SEPTEMBER 2019 - JUNE 2020</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Unmanned Ground Vehicle (UGV) Software Team</h2>
            <h2 className={styles.company}>
            Northrop Grumman
            </h2>
            <p className={styles.desc}>
              <p style={{fontWeight: "bold"}}>
              ● Coded framework for guiding UGV vehicle moment using Python
              </p>
                  <p style={{ marginLeft: "12px" }}>
                    ○ Collaborated to write functions allowing the vehicle to
                    move, stop, and open storage cabinet to allow passengers to
                    get in. Also to track its location and travel and return
                    safely to the desired location.
                  </p>
            </p>

            <p className={styles.desc}>         
            <p style={{fontWeight: "bold"}}>● Set up vehicle communications to send commands and receive status from the UGV</p>
                  <p style={{ marginLeft: "12px" ,textAlign: "justify" }}>
                    ○ Sets up an HTTP server on a local port and sends and receives requests through that server.
                  </p>
                  <p style={{ marginLeft: "12px" ,textAlign: "justify" }}>
                    ○ The vehicle continuously asks for commands and lets the user see on-site operations through a camera embedded inside the custom made remote-controlled car.
                  </p>
                  <p style={{ marginLeft: "12px" ,textAlign: "justify"}}>
                    ○ Specifically made commands for the RC to follow such as ‘stop’, ‘go’, ‘show webcam’, ‘load’, and ‘unload’.
                  </p>                 
            </p>
          </div>
        </div>
      </div>

      <div className={styles.resumeSection}>
        <div className={styles.head}>
          <IoSchoolOutline size={28} />
          &nbsp; &nbsp;
          <h1 className={styles.headIn}>Educational Qualifications</h1>
        </div>
        <br />
        <br />
        <div className={styles.card}>
          <h2 className={styles.date}>SEPTEMBER 2019 - Present</h2>
          <div className={styles.exp}>
            <h2 className={styles.expHead}>Bachelor of Computer Science</h2>
            <h2 className={styles.company}>
            California State University, San Luis Obispo
            </h2>
            <p className={styles.desc} style={{fontWeight: "bold"}}>
            ● Expected to graduate in June 2023 with a BS Computer Science degree
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
}
