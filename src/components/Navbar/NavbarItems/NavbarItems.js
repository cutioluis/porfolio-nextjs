import React, { useState } from "react";
import styles from "./NavbarItems.module.css";

const NavbarItems = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navbar_li}>
      <span onClick={() => setOpen(!open)} href="">
        {props.title}
      </span>
      {open && props.children}
    </li>
  );
};

export default NavbarItems;
