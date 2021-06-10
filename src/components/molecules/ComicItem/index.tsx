import React, { FC } from "react";
import styles from "./style.module.scss";

const ComicItem: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.thumbnailWrapper}>
      <img className={styles.thumbnail} src="/hoge/thumbnail.jpg" />
    </div>
    <div>aaa</div>
  </div>
);

export default ComicItem;
