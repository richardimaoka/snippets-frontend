import { ReactElement, useContext } from "react";
import { ListDepthContext } from "./ListDepthContext";
import { List } from "./List";
import styles from "./ListItem.module.css";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
  children?: ReactElement | ReactElement[];
};

export function ListItem(props: Props) {
  const depth = useContext(ListDepthContext);

  return (
    <>
      <Link
        href={props.href}
        className={styles.component}
        style={{ paddingLeft: `${16 * depth}px` }}
      >
        {props.text}
      </Link>

      {props.children && (
        <ListDepthContext.Provider value={depth + 1}>
          <List>{props.children}</List>
        </ListDepthContext.Provider>
      )}
    </>
  );
}
