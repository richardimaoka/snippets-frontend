import { List } from "./List";
import { ListItemLink } from "./ListItemLink";
import styles from "./MenuContents.module.css";

type Props = {};

export function MenuContents(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.header}>Top templates</div>
      <List>
        <ListItemLink
          href="/"
          imageSrc="/images/sample1.jpg"
          text="1-on-1 Meeting Agenda"
          imageHeight={400}
          imageWidth={600}
        />
        <ListItemLink
          href="/"
          imageSrc="/images/sample2.jpg"
          text="Agile Board Template | Trello"
          imageHeight={400}
          imageWidth={600}
        />
        <ListItemLink
          href="/"
          imageSrc="/images/sample3.jpg"
          text="Company Overview"
          imageHeight={400}
          imageWidth={600}
        />
        <ListItemLink
          href="/"
          imageSrc="/images/sample1.jpg"
          text="Mise-En-Place Personal Products"
          imageHeight={400}
          imageWidth={600}
        />
      </List>
    </div>
  );
}
