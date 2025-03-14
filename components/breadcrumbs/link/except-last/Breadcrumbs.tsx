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

export type BreadcrumbChildProps = ChildProps;

export function Breadcrumbs(props: Props) {
  return (
    <div className={styles.component}>
      {props.elements.map((x, i) =>
        i === props.elements.length - 1 ? (
          <div key={x.text + x.href} className={styles.element}>
            {x.text}
          </div>
        ) : (
          <Fragment key={x.text + x.href}>
            <Link className={styles.element + " " + styles.link} href={x.href}>
              {x.text}
            </Link>
            <div className={styles.separator}>&gt;</div>
          </Fragment>
        )
      )}
    </div>
  );
}
