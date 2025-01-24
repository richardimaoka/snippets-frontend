import { ReactNode } from "react";
import styles from "./List.module.css";

type ItemProps = {
  item: ReactNode;
  children?: ReactNode;
};

export function ListItem(props: ItemProps) {
  return (
    <div>
      {props.item}
      {props.children && <List offset>{props.children}</List>}
    </div>
  );
}

type ListInternalProps = {
  // list of <ListItem>
  children: ReactNode;
  offsetLevel: number;
};

function ListInternal(props: ListInternalProps) {
  return <div className={styles.list}>{props.children}</div>;
}

type Props = {
  // list of <ListItem>
  children: ReactNode;
  offsetLevel?: number;
};

export function List(props: Props) {
  const offsets = Array(props.offsetLevel);

  <div className={styles.list + (props.offset ? " " + styles.offset : "")}>
    {props.children}
  </div>;
}
