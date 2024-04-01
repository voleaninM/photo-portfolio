"use client";
import { PhotoT } from "@/types/PhotoT";
import styles from "./Gallery.module.css";
import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  700: 1,
};

type GalleryPropsT = {
  images: PhotoT[];
};
export default function Gallery({ images }: GalleryPropsT) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonry}
      columnClassName=""
    >
      {images.map((image) => (
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
  );
}
