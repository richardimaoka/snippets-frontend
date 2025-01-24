import styles from "./ListItemLink.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
  href: string;
};

export function ListItemLink(props: Props) {
  return (
    <Link href={props.href} className={styles.component}>
      <Image
        className={styles.image}
        src={props.imageSrc}
        width={props.imageWidth}
        height={props.imageHeight}
        alt={props.text}
      />
      <span className={styles.text}>{props.text}</span>
    </Link>
  );
}
