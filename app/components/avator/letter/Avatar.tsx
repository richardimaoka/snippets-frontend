import styles from "./Avatar.module.css";

type Props = {
  name: string;
  backgroundColor: string;
};

function displayName(name: string) {
  if (name.length === 0) {
    return "";
  } else if (name.length === 1) {
    return name.toUpperCase();
  } else if (name.length === 2) {
    return name.toUpperCase();
  } else {
    // name.length >= 3
    if (name.includes(" ")) {
      const parts = name.split(" ");
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    } else {
      return name.substring(0, 2).toUpperCase();
    }
  }
}

export function Avatar(props: Props) {
  const name = displayName(props.name);
  return (
    <span
      className={styles.component}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {name}
    </span>
  );
}
