import { ReactElement, useContext } from "react";
import { ListDepthContext } from "./ListDepthContext";
import { List } from "./List";
import styles from "./ListItem.module.css";

type Props = {
  item: ReactElement;
  children?: ReactElement | ReactElement[];
};

export function ListItem(props: Props) {
  const depth = useContext(ListDepthContext);

  return (
    <>
      <div
        className={styles.component}
        style={{ paddingLeft: `${16 * depth}px` }}
      >
        {props.item}
      </div>
      {props.children && (
        <ListDepthContext.Provider value={depth + 1}>
          <List>{props.children}</List>
        </ListDepthContext.Provider>
      )}
    </>
  );
}
