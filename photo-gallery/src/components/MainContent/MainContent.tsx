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
  default: 2,
  700: 1,
};

type MainContentPropsT = {
  images: PhotoT[];
};

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
          {images.map((image, index) => (
            <div className={styles.overlayContainer} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                blurDataURL={image.blurImage}
                placeholder="blur"
                sizes="(max-width: 700px) 100vw,
(max-width: 1280px) 50vw,
(max-width: 140px) 33vw"
              />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
}
