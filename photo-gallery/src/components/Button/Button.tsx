"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import Link from "next/link";
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
    <Link href="#" className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
