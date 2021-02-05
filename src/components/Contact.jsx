import React from "react";
import styles from "./Contact.module.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrSnapchat } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import contact from '../assets/images/contact.png'

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.contactSection}>
        <img src={contact} alt="Me" className={styles.me}/>
        <h2 className={styles.emailphoneHead}>
          <HiOutlineMail size="30px" />
          Email
        </h2>
        <a
          className={styles.emailphoneLink}
          href="mailto:hnln@calpoly.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          hnln@calpoly.edu
        </a>
        <br />
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/iaryansadyora/"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook size="30px" />
          </a>
          <a
            href="https://www.instagram.com/aryan_sadyora/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram size="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsimran-preet-singh-1030281a5/"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter size="30px" />
          </a>
          <a
            href="https://www.snapchat.com/add/aryan_sadyora/"
            rel="noreferrer"
            target="_blank"
          >
            <GrSnapchat size="30px" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCqCfUJlx68rrxTZ4q95SNJQ/"
            rel="noreferrer"
            target="_blank"
          >
            <FaYoutube size="30px" />
          </a>
          <a
            href="https://github.com/harsimran-preet/"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsimran-preet-singh-1030281a5/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin size="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}
