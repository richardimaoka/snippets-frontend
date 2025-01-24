import { List } from "../hardcoded/button/List";
import { ListItemButton } from "../hardcoded/button/ListItemButton";
import styles from "./Example.module.css";

type Props = {};

export function Example(props: Props) {
  return (
    <div className={styles.component}>
      <List>
        <ListItemButton icon="home" text="ホーム" />
        <ListItemButton icon="search" text="話題を検索" />
        <ListItemButton icon="notifications" text="通知" />
        <ListItemButton icon="mail" text="メッセージ" />
        <ListItemButton icon="api" text="Grok" />
        <ListItemButton icon="bookmark" text="ブックマーク" />
        <ListItemButton icon="people" text="コミュニティ" />
      </List>
    </div>
  );
}
