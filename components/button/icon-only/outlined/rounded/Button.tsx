import styles from "./Button.module.css";
import { Icon } from "./Icon";

type Props = {
  icon: string;
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
      <Icon name={props.icon} />
    </button>
  );
}
