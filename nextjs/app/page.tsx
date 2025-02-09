import { Avatar } from "./components/avator/letter/Avatar";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <Avatar name="Kent C. Dodds" backgroundColor="blue" />
      </div>
    </div>
  );
}
