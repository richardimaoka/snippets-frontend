import styles from "./Component.module.css";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
};

export function Component(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.text}>{props.text}</div>
      <Image
        className={styles.image}
        src={props.imageSrc}
        width={props.imageWidth}
        height={props.imageHeight}
        alt={props.text}
      />
    </div>
  );
}
