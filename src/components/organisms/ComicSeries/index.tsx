import Link from "next/link";
import React, { FC } from "react";
import styles from "./style.module.scss";
import ComicItem from "components/molecules/ComicItem";

const ComicSeries: FC = () => (
  <ol className={styles.list}>
    <li className={styles.item}>
      <Link href="/comics/hoge">
        <a className={styles.link}>
          <ComicItem />
        </a>
      </Link>
    </li>
    <li className={styles.item}>
      <Link href="/comics/hoge">
        <a className={styles.link}>
          <ComicItem />
        </a>
      </Link>
    </li>
    <li className={styles.item}>
      <Link href="/comics/hoge">
        <a className={styles.link}>
          <ComicItem />
        </a>
      </Link>
    </li>
    <li className={styles.item}>
      <Link href="/comics/hoge">
        <a className={styles.link}>
          <ComicItem />
        </a>
      </Link>
    </li>
    <li className={styles.item}>
      <Link href="/comics/hoge">
        <a className={styles.link}>
          <ComicItem />
        </a>
      </Link>
    </li>
  </ol>
);

export default ComicSeries;
