"use client";
import React, { ReactNode } from "react";
import styles from "./Tab.module.css";

type TabT = {
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
};

export default function Tab({ children, active = false, onClick }: TabT) {
  return (
    <button
      className={`${styles.tab} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
