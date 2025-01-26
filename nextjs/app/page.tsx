import { Component } from "./components/card/vertical-parts/2-items/1fr-auto/Component";
import styles from "./page.module.css";
export default function Page() {
  return (
    <div className={styles.component}>
      <Component
        imageSrc="/images/sample1.jpg"
        text="1-on-1 Meeting Agenda"
        imageHeight={400}
        imageWidth={600}
      />
    </div>
  );
}
