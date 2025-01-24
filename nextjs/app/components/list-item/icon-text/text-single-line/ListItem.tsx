import styles from "./Button.module.css";
import { Icon } from "./Icon";

type Props = {
  icon: string;
  children: string;
};

export function ListItem(props: Props) {
  return (
    <div className={styles.component}>
      <Icon name={props.icon} />
      {props.children}
    </div>
  );
}
