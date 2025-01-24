import { ReactNode } from "react";
import styles from "./MenuButton.module.css";
import { Icon } from "./Icon";

type Props = {
  target: string; //must be globally unique
  anchorName: string;
  children: ReactNode;
};

export function MenuButton(props: Props) {
  return (
    <button
      type="button"
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "anchor-name": props.anchorName,
      }}
      className={styles.component}
      popoverTarget={props.target}
    >
      <Icon name="keyboard_arrow_down" />
      {props.children}
    </button>
  );
}
