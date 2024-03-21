"use client";
import Masonry from "react-masonry-css";
import TabsContainer from "@/components/Tabs/TabsContainer";
import styles from "./MainContent.module.css";

import { useState } from "react";
import Image from "next/image";
import { PhotoT } from "@/types/PhotoT";

const tabs = [
  { value: "all", label: "all" },
  { value: "oceans", label: "oceans" },
  { value: "forests", label: "forests" },
];

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  700: 1,
};

type MainContentPropsT = {
  images: {
    all: PhotoT[];
    oceans: PhotoT[];
    forests: PhotoT[];
  };
};
type TabType = keyof MainContentPropsT["images"];

export default function MainContent({ images }: MainContentPropsT) {
  const [tab, setTab] = useState("all");

  return (
    <>
      <TabsContainer
        className={styles.tabs}
        tabs={tabs}
        setTab={setTab}
        currentTab={tab}
      />
      <div className={styles.mainContent}>
        {tab}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonry}
          columnClassName=""
        >
          {images[tab as TabType].map((image, index) => (
            <div className={styles.overlayContainer} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                blurDataURL={image.blurImage}
                placeholder="blur"
                sizes="(min-width: 1220px) 309px, (min-width: 1060px) 472px, (min-width: 720px) calc(43.75vw + 17px), (min-width: 340px) calc(100vw - 40px), calc(1020vw - 2984px)"
              />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
}
