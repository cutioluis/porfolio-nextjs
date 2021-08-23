import React from "react";
import styles from "./DropDown.module.css";

function DropDown() {
  function DropDownItems(props) {
    return (
      <a className={styles.DropDown_item} href="">
        {props.children}
      </a>
    );
  }

  return (
    <div className={styles.dropDown}>
      <DropDownItems>Open Source</DropDownItems>
      <DropDownItems>Developer</DropDownItems>
    </div>
  );
}

export default DropDown;
