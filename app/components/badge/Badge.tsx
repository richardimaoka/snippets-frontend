import styles from "./Badge.module.css";

type Props = {
  number: number;
};

export function Badge(props: Props) {
  const display = props.number > 9999 ? "9999+" : props.number;

  return props.number === 0 ? (
    <></>
  ) : (
    <span className={styles.component}>{display}</span>
  );
}
