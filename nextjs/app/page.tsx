import { Component as Component1fr1fr } from "./components/card/horizontal-parts/2-items/1fr-1fr/Component";
import { Component as Component1frauto } from "./components/card/horizontal-parts/2-items/1fr-auto/Component";
import { Component as Componentauto1fr } from "./components/card/horizontal-parts/2-items/auto-1fr/Component";
import { Component as Componentautoauto } from "./components/card/horizontal-parts/2-items/auto-auto/Component";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <Component1fr1fr text="a" />
        <Component1frauto text="a" />
        <Componentauto1fr text="./components/card/horizontal-parts/2-items/auto-1fr/Component./components/card/horizontal-parts/2-items/auto-1fr/Component" />
        <div style={{ width: "max-content" }}>
          <Componentautoauto text="./components/card/" />
        </div>
      </div>
    </div>
  );
}
