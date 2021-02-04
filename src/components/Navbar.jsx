import React,{useState} from "react";
import { slide as Menu } from "react-burger-menu";
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-scroll';
import myPic from '../assets/images/me.jpeg';
import styles from './Navbar.module.css';

export default function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  const closeit = () => {
    setMenuOpen(false)
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  return (
    <div>
    <Menu isOpen={menuOpen} onStateChange={handleStateChange} >
      <div>
        <img src ={myPic} alt="MyPic" className={styles.myPic} />
      </div>
      <hr />
      <Link className={styles.menuItem} to="home" smooth={true} duration={1000} onClick={()=> closeit()} >
        Home
      </Link><hr />
      <Link className={styles.menuItem} to="about" smooth={true} duration={1000} onClick={()=> closeit()} >
        About Me
      </Link><hr />
      <Link className={styles.menuItem} to="skills" smooth={true} duration={1000} onClick={()=> closeit()} >
        Skills
      </Link><hr />
      <Link className={styles.menuItem} to="resume" smooth={true} duration={1000} onClick={()=> closeit()} >
        Resume
      </Link><hr />
      <Link className={styles.menuItem} to="portfolio" smooth={true} duration={1000} onClick={()=> closeit()} >
        Portfolio
      </Link><hr />
       <Link className={styles.menuItem} to="contact" smooth={true} duration={1000} onClick={()=> closeit()} >
        Contact Me
      </Link><hr />
      <div className={styles.icons}>
        <a href="https://www.facebook.com/iaryansadyora/"
          rel="noreferrer" target="_blank" >
        <FaFacebook size = "20px" />
        </a>
        <a href="https://www.instagram.com/aryan_sadyora/"
          rel="noreferrer" target="_blank" >
        <FaInstagram size = "20px"/>
        </a>
        <a href="https://www.youtube.com/channel/UCqCfUJlx68rrxTZ4q95SNJQ/"
          rel="noreferrer" target="_blank" >
        <FaYoutube size = "20px" />
        </a>
        <a href="https://github.com/harsimran-preet/"
          rel="noreferrer" target="_blank" >
        <FaGithub size="20px" />
        </a>
        <a href="https://www.linkedin.com/in/harsimran-preet-singh-1030281a5/"
          rel="noreferrer" target="_blank" >
        <FaLinkedin size = "20px" />
        </a>
        <a href="https://www.linkedin.com/in/harsimran-preet-singh-1030281a5/"
          rel="noreferrer" target="_blank" >
        <FaTwitter size = "20px" />
        </a>
      </div>
      </Menu>
      </div>
  );
};