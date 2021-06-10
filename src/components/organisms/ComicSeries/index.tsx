import ComicItem from "components/molecules/ComicItem";
import React, { FC } from "react";
import styles from "./style.module.scss";

const ComicSeries: FC = () => (
  <ol className={styles.list}>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
  </ol>
);

export default ComicSeries;
