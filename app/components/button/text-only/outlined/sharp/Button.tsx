import styles from "./Button.module.css";

type Props = {
  children: string;
  disabled?: boolean;
  size?: "large" | "medium" | "small";
};

export function Button(props: Props) {
  return (
    <button
      type="button"
      className={
        styles.component + (props.disabled ? " " + styles.disabled : "")
      }
    >
      {props.children}
    </button>
  );
}
