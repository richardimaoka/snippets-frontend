//import { List, ListItem } from "./components/list/nested/offset/foldable/List";
import { Children, ReactNode } from "react";
import styles from "./page.module.css";

type Props = {
  children: ReactNode[] | ReactNode;
};

function isList(children: ReactNode[] | ReactNode): children is ReactNode[] {
  if (children && typeof children === "object" && "length" in children) {
    return true;
  }

  return false;
}

function Component(props: Props) {
  if (isList(props.children)) {
    console.log("children is list");
  } else {
    console.log("children is a single node");
  }

  return <div className={styles.component}>{props.children}</div>;
}

export default function Page() {
  //   <List>
  //   <ListItem name="aaa"></ListItem>
  //   <ListItem name="home"></ListItem>
  //   <ListItem name="aaa">
  //     <ListItem name="aaa"></ListItem>
  //     <ListItem name="home"></ListItem>
  //     <ListItem name="search"></ListItem>
  //     <ListItem name="notifications">
  //       <ListItem name="search"></ListItem>
  //       <ListItem name="notifications"></ListItem>
  //       <ListItem name="aaa"></ListItem>
  //     </ListItem>
  //     <ListItem name="aaa"></ListItem>
  //   </ListItem>
  //   <ListItem name="search"></ListItem>
  //   <ListItem name="notifications"></ListItem>
  // </List>

  return (
    <div className={styles.component}>
      <Component>
        <div>1</div>
        <div>2</div>
      </Component>
    </div>
  );
}
