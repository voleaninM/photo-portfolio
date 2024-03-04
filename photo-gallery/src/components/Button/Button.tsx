"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
type PropsT = {
  children: ReactNode;
  additionalStyles?: string;
  type?: "button" | "link";
  onClick?: () => void;
};

export default function Button({
  children,
  type = "button",
  onClick,
  additionalStyles,
}: PropsT) {
  const buttonClasses = `${styles.btn} ${additionalStyles}`;
  return type === "link" ? (
    <a href="#" className={buttonClasses}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
