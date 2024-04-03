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
            className={styles.galleryImage}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            blurDataURL={image.blurImage ? image.blurImage! : ""}
            placeholder={image.blurImage ? "blur" : "empty"}
            sizes="(min-width: 1220px) 309px, (min-width: 1060px) 472px, (min-width: 720px) calc(43.75vw + 17px), (min-width: 340px) calc(100vw - 40px), calc(1020vw - 2984px)"
          />
          <div className={styles.overlay}>
            <div className={styles.likes}>
              <span>{image.likes}</span>
              <Image src={"/heart.svg"} width={30} height={30} alt="heart" />
            </div>
          </div>
          <div className={styles.imageDescription}>
            <div className={styles.userInfo}>
              <Image
                src={image.userInfo.userImage}
                width={40}
                height={40}
                alt={image.userInfo.name}
              />
              <span>{image.userInfo.name}</span>
            </div>
            {image.imageInfo.city && image.imageInfo.city && (
              <span>
                {image.imageInfo.city},{image.imageInfo.country}
              </span>
            )}

            <span>Created at: {image.userInfo.date}</span>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
