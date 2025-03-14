import styles from "./ListItemLink.module.css";
import { Icon } from "./Icon";
import Link from "next/link";

type Props = {
  icon: string;
  text: string;
  href: string;
};

export function ListItemLink(props: Props) {
  return (
    <Link href={props.href} className={styles.component}>
      <Icon name={props.icon} />
      {props.text}
    </Link>
  );
}
