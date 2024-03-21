"use client";

import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.error}>
      <h2>Something went wrong! {error.message}</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
