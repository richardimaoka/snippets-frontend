import { Fragment } from "react";
import styles from "./Breadcrumbs.module.css";
import Link from "next/link";

type ChildProps = {
  href: string;
  text: string;
};

type Props = {
  elements: ChildProps[];
};

export function Breadcrumbs(props: Props) {
  return (
    <div className={styles.component}>
      {props.elements.map((x, i) =>
        i === props.elements.length - 1 ? (
          // if last element
          <div className={styles.element}>{x.text}</div>
        ) : (
          <Fragment key={i}>
            <Link className={styles.element + " " + styles.link} href={x.href}>
              {x.text}
            </Link>
            {<div className={styles.separator}>&gt;</div>}
          </Fragment>
        )
      )}
    </div>
  );
}
