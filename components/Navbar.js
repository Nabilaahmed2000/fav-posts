import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();

  const isPathActive = (path) => router.pathname === path;

  return (
    <nav className={styles.navbar}>
      {/* Large Navigation */}
      <ul className={styles.largNav}>
        <NavItem path="/" label="Home" isPathActive={isPathActive} />
        <NavItem path="/favorites" label="Liked" isPathActive={isPathActive} />
      </ul>

      {/* Small Navigation */}
      <ul className={styles.smallNav}>
        <NavItem path="/" icon={faHome} isPathActive={isPathActive} />
        <NavItem path="/favorites" icon={faHeart} isPathActive={isPathActive} />
      </ul>
    </nav>
  );
};

const NavItem = ({ path, label, icon, isPathActive }) => {
  const isActive = isPathActive(path);
  const classNames = `${isActive ? styles.active : ""}`;

  return (
    <li className={classNames}>
      <Link href={path}>{icon ? <FontAwesomeIcon icon={icon} /> : label}</Link>
    </li>
  );
};

export default Navbar;
