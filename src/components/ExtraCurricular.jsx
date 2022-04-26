import React from "react";
import styles from "./ExtraCurricular.module.css";
import { CgSmartphoneChip } from "react-icons/cg";
import { FiYoutube } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import pic from '../assets/images/pic.png'

export default function ExtraCurricular() {
  const getAge = (birthday) => {
    const millis = Date.now() - Date.parse(birthday);
    return new Date(millis).getFullYear() - 1970;
  }

  return (
    <div className={styles.extraCurricular} id="extraCurricular">
      <h1 className={styles.heading}>Extra Curricular</h1>
      <div className={styles.extraCurricularSection}>
        <p className={styles.tittleDes}>
          Harsimran is a {getAge("12-08-2001")}-year-old Techie from India with a passion for
          technology and a desire to share that passion with the world. He runs
          a YouTube channel "Aryan Sadyora" by himself and is getting a high
          appreciation by his viewers. He hopes to continue creating content and
          expand the channel to new levels! Other than tech and YouTube, he
          spends it's time in studies, hanging out with friends, and playing
          basketball or other recreational sports.
        </p>
        <br />
        <br />
        <div className={styles.box}>
          <div className={styles.boxIN}>
          <br />
            <img src={pic} alt="Logo" className={styles.logo} />
            {/* <br /> */}
            <iframe
            className={styles.iframe}
              title="Subscribers"
              frameborder="0"
              src="https://counts.live/embeds/youtube-subscriber-count/UCqCfUJlx68rrxTZ4q95SNJQ/small"
            />
            <div className={styles.iframe} style={{backgroundColor: "#faeefe", display: "flex", alignItems: "center", justifyContent: "center",flexDirection: "column", }}>
              <h5 style={{fontFamily: "TitilliumWeb", fontWeight: "bold"}}>View Count : 1,700,000+ Views</h5>
              <h5 style={{fontFamily: "TitilliumWeb", fontWeight: "bold"}}>Watchtime : 4,000,000+ Minutes</h5>
            </div>
          </div>

          <div>
            <p className={styles.allhead}>
              <span className={styles.head}>
                <CgSmartphoneChip size={28} style={{ color: "#ffffff" }} />{" "}
                Technology{" "}
              </span>
              <br />
              Harsimran is an avid consumer and enthusiast of technology.
            </p>
            <br />
            <p className={styles.allhead}>
              <span className={styles.head}>
                <FiYoutube size={28} style={{ color: "#ffffff" }} /> YouTube{" "}
              </span>
              <br />
              Harsimran works hard to deliver quality content that his audience
              wants to see.
            </p>
            <br />
            <p className={styles.allhead}>
              <span className={styles.head}>
                <SiGooglescholar size={28} style={{ color: "#ffffff" }} />{" "}
                School{" "}
              </span>
              <br />
              Harsimran is an educated and ambitious student.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
