"use client";
import { FormEvent, useState } from "react";
import styles from "./Searc.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`?search=${search}`);
    setSearch("");
  }
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image topic..."
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        <Image src="/search.svg" alt="search" width={30} height={30} />
      </button>
    </form>
  );
}
