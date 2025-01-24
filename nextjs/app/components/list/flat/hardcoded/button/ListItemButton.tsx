import { ReactElement, useContext } from "react";
import styles from "./ListItemButton.module.css";
import { Icon } from "./Icon";

type Props = {
  icon: string;
  text: string;
  disabled?: boolean;
};

export function ListItemButton(props: Props) {
  return (
    <button
      type="button"
      className={
        styles.component + (props.disabled ? " " + styles.disabled : "")
      }
    >
      <Icon name={props.icon} />
      {props.text}
    </button>
  );
}
