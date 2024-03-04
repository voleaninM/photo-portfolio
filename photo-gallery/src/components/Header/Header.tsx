import Link from "next/link";
import styles from "./Header.module.css";
import Button from "@/components/Button/Button";
import SidePanel from "@/components/SidePanel/SidePanel";

export default function Header() {
  return (
    <header className={styles.header}>
      <div style={{ visibility: "hidden" }}>hm</div>
      <SidePanel></SidePanel>
      <Link href="/" className={styles.logo}>
        logo
      </Link>
      <Button type="link">Get in touch</Button>
    </header>
  );
}
