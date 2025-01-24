import { ReactNode } from "react";
import styles from "./MenuPopover.module.css";

type ToggleMenuPopoverProps = {
  target: string;
  anchorName: string;
  children: ReactNode;
};

export function MenuPopover(props: ToggleMenuPopoverProps) {
  return (
    <div
      id={props.target}
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "position-anchor": props.anchorName,
      }}
      className={styles.component}
      popover="auto"
    >
      {props.children}
    </div>
  );
}
