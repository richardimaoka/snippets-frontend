import { Avatar } from "./components/avator/image/Avatar";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <Avatar
          imageUrl="/images/profile.jpg"
          alt="Michelle"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
