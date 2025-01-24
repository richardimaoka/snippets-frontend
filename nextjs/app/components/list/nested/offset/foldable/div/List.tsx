import { ReactElement } from "react";
import styles from "./List.module.css";

type Props = {
  children: ReactElement | ReactElement[];
};

export function List(props: Props) {
  return <div className={styles.list}>{props.children}</div>;
}
