import styles from "./Badge.module.css";

type Props = {
  number: number;
};

export function Badge(props: Props) {
  return <span className={styles.component}>{props.number}</span>;
}
