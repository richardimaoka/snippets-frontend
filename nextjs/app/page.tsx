"use client";
import styles from "./page.module.css";
import { List } from "./components/list/nested/offset/foldable/List";
import { ListItem } from "./components/list/nested/offset/foldable/ListItem";

export default function Page() {
  return (
    <div className={styles.component}>
      <List>
        <ListItem item={<div>aaa</div>}></ListItem>
        <ListItem item={<div>home</div>}></ListItem>
        <ListItem item={<div>aaa</div>}>
          <ListItem item={<div>aaa</div>}></ListItem>
          <ListItem item={<div>home</div>}></ListItem>
          <ListItem item={<div>search</div>}></ListItem>
          <ListItem item={<div>notifications</div>}>
            <ListItem item={<div>search</div>}></ListItem>
            <ListItem item={<div>notifications</div>}></ListItem>
            <ListItem item={<div>aaa</div>}></ListItem>
          </ListItem>
          <ListItem item={<div>aaa</div>}></ListItem>
        </ListItem>
        <ListItem item={<div>search</div>}></ListItem>
        <ListItem item={<div>notifications</div>}></ListItem>
      </List>
    </div>
  );
}
