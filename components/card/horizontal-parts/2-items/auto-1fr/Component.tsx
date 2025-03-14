import styles from "./Component.module.css";

type Props = {
  text: string;
};

export function Component(props: Props) {
  return (
    <div className={styles.component}>
      <div
        style={{ height: "24px", width: "24px", backgroundColor: "#585858" }}
      ></div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
