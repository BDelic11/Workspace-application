import React from "react";

import logo from "../../../../public/logo/Charterag.svg";

//styles
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

//components
//import BurgerMenu from './BurgerMenu';

const navbarLinks = [
  { id: 1, name: "Destinations", href: "/" },
  {
    id: 2,
    name: "How it works",
    href: "/",
  },
  { id: 3, name: "About", href: "/" },
  { id: 4, name: "Blog", href: "/" },
  { id: 5, name: "FAQ", href: "/" },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className={styles.navbarImage}
      />

      <ul className={styles.navbarIcons}>
        {navbarLinks.map((navbarLink) => (
          <Link
            key={navbarLink.id}
            href={navbarLink.href}
            className={styles.navbarLink}
          >
            <li>{navbarLink.name}</li>
          </Link>
        ))}
      </ul>

      <div className={styles.navbarRightSide}>
        <Link href="/" className={styles.navbarLogIn}>
          Log in
        </Link>
        <Button variant="primary">BOOK NOW</Button>
      </div>
      <div className={styles.navbarShadow}></div>
    </nav>
  );
};

export default Navbar;
