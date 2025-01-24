import { Button } from "../../button/icon-beside-text/contained/pill/icon-right/Button";
import { Button as TextButton } from "../../button/icon-beside-text/text/pill/icon-left/Button";
import { ButtonGroup as HorizontalButtonGroup } from "../horizontal/ButtonGroup";
import { ButtonGroup as VerticalButtonGroup } from "../vertical/ButtonGroup";
import styles from "./ButtonGroupExample.module.css";

type Props = {};

export function ButtonGroupExample(props: Props) {
  return (
    <div className={styles.component}>
      <HorizontalButtonGroup>
        <Button icon="download">download</Button>
        <Button icon="download">download</Button>
        <Button icon="download">download</Button>
        <Button icon="download">download</Button>
        <Button icon="download">download</Button>
      </HorizontalButtonGroup>

      <VerticalButtonGroup>
        <TextButton icon="home">ホーム</TextButton>
        <TextButton icon="search">話題を検索</TextButton>
        <TextButton icon="notifications">通知</TextButton>
        <TextButton icon="mail">メッセージ</TextButton>
        <TextButton icon="api">Grok</TextButton>
        <TextButton icon="bookmark">ブックマーク</TextButton>
      </VerticalButtonGroup>
    </div>
  );
}
