import { SearchBox } from "./components/search/SearchBox";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <SearchBox />
    </div>
  );
}
