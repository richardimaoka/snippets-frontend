import styles from "./SearchBox.module.css";
import Form from "next/form";

type Props = {};

export function SearchBox(props: Props) {
  return (
    <Form
      className={styles.component}
      action={"/components/search/form/search-input-button/results"}
    >
      <div className={styles.inputWrapper}>
        <span className="material-symbols-outlined">search</span>
        <input className={styles.input} name="query" />
      </div>
      <button type="submit" className={styles.button}>
        search
      </button>
    </Form>
  );
}
