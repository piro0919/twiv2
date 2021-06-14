import React, { FC } from "react";
import styles from "./style.module.scss";

const ComicItem: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.thumbnailWrapper}>
      <img
        alt="thumbnail"
        className={styles.thumbnail}
        src="/hoge/thumbnail.jpg"
      />
    </div>
    <div>
      <div className={styles.title}>ドラゴン桜</div>
      <div className={styles.author}>佐藤ショーキ</div>
    </div>
  </div>
);

export default ComicItem;
