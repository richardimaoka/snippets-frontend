import { Component } from "./components/primitive-layout/flex-crowd/Component";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <Component />
      </div>
    </div>
  );
}
