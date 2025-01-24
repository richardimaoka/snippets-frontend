"use client";
import styles from "./page.module.css";
import { Example } from "./components/list/vertical/flat/examples/Example";

export default function Page() {
  return (
    <div className={styles.component}>
      <Example />
    </div>
  );
}
