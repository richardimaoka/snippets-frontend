import { Menu } from "../server/animation/Menu";
import styles from "./Example.module.css";

type Props = {};

export function Example(props: Props) {
  return (
    <div className={styles.component}>
      <Menu buttonName="File">aaa</Menu>
    </div>
  );
}
