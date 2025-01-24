import crypto from "crypto";
import { ReactNode } from "react";
import { MenuButton } from "./MenuButton";
import { MenuPopover } from "./MenuPopover";
import styles from "./Menu.module.css";

type Props = {
  buttonName: string;
  children: ReactNode;
};

// To use node.js crypto, it needs to be async server component.
// Accommodate both Node.js and browser JavaScript is an intimidating work using dynamic import,
// so keeping this only applicable to React Server Component.
export async function Menu(props: Props) {
  const target = crypto.randomUUID();
  const anchorName = "--anchor-" + target;

  return (
    <div className={styles.component}>
      <MenuButton target={target} anchorName={anchorName}>
        {props.buttonName}
      </MenuButton>
      <MenuPopover target={target} anchorName={anchorName}>
        {props.children}
      </MenuPopover>
    </div>
  );
}
