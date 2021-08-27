import Link from "next/link";
import React from "react";
import styles from "./DropDown.module.css";

function DropDown() {
  /*   function DropDownItems(props) {
    return (
      <a className={styles.DropDown_item} href="">
        {props.children}
      </a>
    );
  } */

  const DropDownItems = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={styles.DropDown_item}
      >
        {children}
      </a>
    );
  });

  return (
    <div className={styles.dropDown}>
      <Link href="/">
        <DropDownItems>Open Source</DropDownItems>
      </Link>
      <Link href="/blog">
        <DropDownItems>Developer</DropDownItems>
      </Link>
    </div>
  );
}

export default DropDown;
