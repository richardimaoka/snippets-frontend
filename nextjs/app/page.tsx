import styles from "./page.module.css";
import { Example } from "./components/menu/click/server.example/Example";

export default function Page() {
  return (
    <div className={styles.component}>
      <Example />
    </div>
  );
}
