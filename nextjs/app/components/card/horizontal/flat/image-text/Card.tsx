import styles from "./Card.module.css";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
  href: string;
};

export function Card(props: Props) {
  return (
    <div className={styles.component}>
      <Image
        className={styles.image}
        src={props.imageSrc}
        width={props.imageWidth}
        height={props.imageHeight}
        alt={props.text}
      />
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}
