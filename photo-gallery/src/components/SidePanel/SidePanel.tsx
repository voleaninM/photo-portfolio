import React from "react";
import styles from "./SidePanel.module.css";
import Image from "next/image";
import EmailIcon from "../SVG's/EmailIcon";
import TwIcon from "../SVG's/TwIcon";
import InstIcon from "../SVG's/InstIcon";
import FbIcon from "../SVG's/FbIcon";
import PintIcon from "../SVG's/PintIcon";

export default function SidePanel() {
  return (
    <div className={styles.sidePanel}>
      <ul className={styles.list}>
        <li className={styles.user}>
          <Image src={"/user.webp"} width={40} height={40} alt="user" />
          <div className={styles.userInfo}>
            <span>user name</span>
            <span>user address</span>
          </div>
        </li>

        <li className={styles.listItem}>
          <a href="https://twitter.com" target="_blank">
            <TwIcon size={40} color="white" />
            <span>twitter.com</span>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://instagram.com">
            <InstIcon size={40} color="white" />
            <span>instagram.com</span>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://facebook.com">
            <FbIcon size={40} color="white" />
            <span>facebook.com</span>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://pinterest.com">
            <PintIcon size={40} color="white" />
            <span>pinterest.com</span>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="mailto:voleaninmax@gmail.com">
            <EmailIcon size={40} color="white" />
            <span>email Me</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
