import { ReactElement, useContext } from "react";
import styles from "./ListItemButton.module.css";

type Props = {
  text: string;
  children?: ReactElement | ReactElement[];
};

export function ListItem(props: Props) {
  return <button className={styles.component}>{props.text}</button>;
}
