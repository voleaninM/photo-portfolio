import { PhotoT } from "@/types/PhotoT";
import styles from "./MainContent.module.css";
import Gallery from "../Gallery/Gallery";

type MainContentPropsT = {
  images: PhotoT[];
};

export default function MainContent({ images }: MainContentPropsT) {
  return (
    <div className={styles.mainContent}>
      <Gallery images={images} />
    </div>
  );
}
