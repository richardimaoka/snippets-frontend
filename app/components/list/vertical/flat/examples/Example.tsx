import { List as ButtonList } from "../hardcoded/icon-beside-text/button/List";
import { List as LinkList } from "../hardcoded/icon-beside-text/link/List";
import { ListItemButton } from "../hardcoded/icon-beside-text/button/ListItemButton";
import { ListItemLink } from "../hardcoded/icon-beside-text/link/ListItemLink";
import styles from "./Example.module.css";

type Props = {};

export function Example(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <ButtonList>
          <ListItemButton icon="home" text="ホーム" />
          <ListItemButton icon="search" text="話題を検索" />
          <ListItemButton icon="notifications" text="通知" />
          <ListItemButton icon="mail" text="メッセージ" />
          <ListItemButton icon="api" text="Grok" />
          <ListItemButton icon="bookmark" text="ブックマーク" />
          <ListItemButton icon="people" text="コミュニティ" />
        </ButtonList>
      </div>
      <div className={styles.component}>
        <LinkList>
          <ListItemLink icon="home" text="ホーム" href="/a" />
          <ListItemLink icon="search" text="話題を検索" href="/a" />
          <ListItemLink icon="notifications" text="通知" href="/a" />
          <ListItemLink icon="mail" text="メッセージ" href="/a" />
          <ListItemLink icon="api" text="Grok" href="/a" />
          <ListItemLink icon="bookmark" text="ブックマーク" href="/a" />
          <ListItemLink icon="people" text="コミュニティ" href="/a" />
        </LinkList>
      </div>
    </div>
  );
}
