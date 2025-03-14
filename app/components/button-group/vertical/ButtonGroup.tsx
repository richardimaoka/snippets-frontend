import { ReactNode } from "react";
import styles from "./ButtonGroup.module.css";

type Props = {
  children: ReactNode;
};

export function ButtonGroup(props: Props) {
  return <div className={styles.component}>{props.children}</div>;
}
