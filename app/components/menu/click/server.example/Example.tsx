import { Menu } from "../server/static/Menu";
import styles from "./Example.module.css";
import { MenuContents } from "./MenuContents";

type Props = {};

export function Example(props: Props) {
  return (
    <div className={styles.component}>
      <Menu buttonName="File">
        <MenuContents />
      </Menu>
    </div>
  );
}
