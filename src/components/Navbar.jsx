import styles from "./Navbar.module.css";
import menuBtn from "../images/menu.svg";
import exitBtn from "../images/exit.svg";

import { socialLinks, navs } from "../links/navLinks";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <nav className={styles.nav}>
      <img
        src={menuBtn}
        alt=""
        onClick={handleMenu}
        className={`${isOpen === false && styles.remove} ${styles.btn}`}
      />

      <div className={`${styles.links} ${isOpen && styles.remove}`}>
        <img src={exitBtn} alt="" onClick={handleMenu} className={styles.btn} />

        <ul className={styles.pryUl}>
          {navs.map((nav) => (
            <li key={nav.id}>
              <a href={nav.route}>{nav.nav}</a>
            </li>
          ))}
        </ul>

        <ul>
          {socialLinks.map((media) => (
            <li key={media.id}>
              <a href={media.link}>
                <img src={media.image} alt="GitHub" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
