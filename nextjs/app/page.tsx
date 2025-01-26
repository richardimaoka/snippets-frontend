import { Component as RComponent } from "./components/card/horizontal-parts/2-items/1fr-auto/Component";
import { Component as LComponent } from "./components/card/horizontal-parts/2-items/auto-1fr/Component";
import styles from "./page.module.css";
export default function Page() {
  return (
    <div className={styles.component}>
      <RComponent
        imageSrc="/images/sample1.jpg"
        text="1-on-1 Meeting Agenda"
        imageHeight={400}
        imageWidth={600}
      />
      <LComponent
        imageSrc="/images/sample1.jpg"
        text="1-on-1 Meeting Agenda"
        imageHeight={400}
        imageWidth={600}
      />
    </div>
  );
}
