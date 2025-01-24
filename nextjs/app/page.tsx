"use client";
import styles from "./page.module.css";
import { List } from "./components/list/nested/offset/foldable/link/List";
import { ListItem } from "./components/list/nested/offset/foldable/link/ListItem";

export default function Page() {
  return (
    <div className={styles.component}>
      <List>
        <ListItem href="/" text="aaa"></ListItem>
        <ListItem href="/" text="home"></ListItem>
        <ListItem href="/" text="aaa">
          <ListItem href="/" text="aaa"></ListItem>
          <ListItem href="/" text="home"></ListItem>
          <ListItem href="/" text="search"></ListItem>
          <ListItem href="/" text="notifications">
            <ListItem href="/" text="search"></ListItem>
            <ListItem href="/" text="notifications"></ListItem>
            <ListItem href="/" text="aaa"></ListItem>
          </ListItem>
          <ListItem href="/" text="aaa"></ListItem>
        </ListItem>
        <ListItem href="/" text="search"></ListItem>
        <ListItem href="/" text="notifications"></ListItem>
      </List>
    </div>
  );
}
