import { Component } from "./components/Component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Component />
    </div>
  );
}
