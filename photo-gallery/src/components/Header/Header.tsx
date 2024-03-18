import styles from "./Header.module.css";
import Button from "@/components/Button/Button";
import SidePanel from "@/components/SidePanel/SidePanel";

export default function Header() {
  return (
    <header className={styles.header}>
      <SidePanel></SidePanel>
      <Button type="link" additionalStyles={styles.button}>
        Get in touch
      </Button>
    </header>
  );
}
