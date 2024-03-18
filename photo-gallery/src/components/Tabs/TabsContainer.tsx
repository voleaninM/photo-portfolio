import React, { Dispatch } from "react";
import styles from "./TabsContainer.module.css";
import Tab from "./Tab/Tab";
import { TabT } from "@/types/TabT";
type TabsContainerT = {
  className: string;
  tabs: TabT[];
  currentTab: string;
  setTab: Dispatch<React.SetStateAction<string>>;
};

export default function TabsContainer({
  className,
  tabs,
  currentTab,
  setTab,
}: TabsContainerT) {
  function onClickTabHandler(value: string) {
    setTab(value);
  }

  return (
    <div className={`${styles.tabs} ${className}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          onClick={() => onClickTabHandler(tab.value)}
          active={tab.value === currentTab}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
}
