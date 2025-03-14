import Image from "next/image";
import styles from "./Avatar.module.css";

type Props = {
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
};

export function Avatar(props: Props) {
  return (
    <Image
      className={styles.component}
      width={props.width}
      height={props.height}
      src={props.imageUrl}
      alt={props.alt}
    />
  );
}
