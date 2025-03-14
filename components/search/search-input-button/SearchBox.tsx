import styles from "./SearchBox.module.css";

type Props = {};

export function SearchBox(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.inputWrapper}>
        <span className="material-symbols-outlined">search</span>
        <input className={styles.input} />
      </div>
      <button type="button" className={styles.button}>
        search
      </button>
    </div>
  );
}
