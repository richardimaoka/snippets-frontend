import { ReactNode } from "react";
import styles from "./List.module.css";

type ItemProps = {
  name: string;
  children?: ReactNode;
};

function InternalItem(props: ItemProps) {
  return <div className={styles.item}>{props.name}</div>;
}

export function ListItem(props: ItemProps) {
  return (
    <div>
      <InternalItem name={props.name} />
      {props.children && <List offset>{props.children}</List>}
    </div>
  );
}

type Props = {
  children: ReactNode;
  offset?: boolean;
};

export function List(props: Props) {
  return (
    <div className={styles.list + (props.offset ? " " + styles.offset : "")}>
      {props.children}
    </div>
  );
}
