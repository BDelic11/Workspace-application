import React from "react";

//styles
import styles from "./Footer.module.scss";
import Image from "next/image";

//icons
import scroll from "@/../public/icons/scroll.svg";
import logo from "@/../public/logo/Charterag.svg";
import instagram from "@/../public/icons/instagram.svg";
import facebook from "@/../public/icons/facebook_social.svg";
import youtube from "@/../public/icons/youtube.svg";
import Link from "next/link";

//components
//import BurgerMenu from './BurgerMenu';

const socialsIcons = [
  { id: 1, name: "instagram", src: instagram },
  { id: 2, name: "facebook", src: facebook },
  { id: 3, name: "youtube", src: youtube },
];

const footerLinks = [
  {
    id: 1,
    title: "Programs",
    links: ["Program1", "Program2", "Program3", "Program4"],
  },
  { id: 2, title: "Find out", links: ["About1", "About2", "About3"] },
  { id: 3, title: "Charterag", links: ["Link1", "Link2", "Link3"] },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <Image width={216} height={50} src={logo} alt="logo icon" />
        <Image width={50} height={50} src={scroll} alt="scroll icon" />
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.footerMiddleLeft}>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id}>
              <h3>{footerLink.title}</h3>
              <div className={styles.linksContainer}>
                {footerLink.links.map((link) => (
                  <Link href={link} key={link}>
                    <p>{link}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footerMiddleRight}>
          {socialsIcons.map((socialIcon) => (
            <Image
              key={socialIcon.id}
              src={socialIcon.src}
              alt={socialIcon.name}
              className={styles.socialIcon}
            />
          ))}
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.footerLower}>
        <div className={styles.footerLowerLeft}>
          <p>
            Copyright © 2024 Charterag Ltd. (company no. 08245801)
            <span>
              Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.
            </span>
          </p>
        </div>
        <div className={styles.footerLowerRight}>
          <p>Legal info</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
