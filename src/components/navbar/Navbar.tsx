import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href='/' style={{ marginRight: "100px" }}>
        <div>Stadtgesundheit</div>
      </Link>
      <div className={styles.city_button}>
        <Link href='/city'>cities</Link>
      </div>
    </div>
  );
};

export default Navbar;
