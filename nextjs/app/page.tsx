import { List, ListItem } from "./components/list/nested/offset/foldable/List";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <List>
        <ListItem name="aaa"></ListItem>
        <ListItem name="home"></ListItem>
        <ListItem name="search"></ListItem>
        <ListItem name="notifications"></ListItem>
        <ListItem name="aaa"></ListItem>
      </List>
    </div>
  );
}
