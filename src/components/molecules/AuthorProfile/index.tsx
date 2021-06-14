import React, { FC } from "react";
import styles from "./style.module.scss";

const AuthorProfile: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.iconWrapper}>
      <img alt="author" className={styles.icon} src="/hoge/user.jpg" />
    </div>
    <div>佐藤ショーキ</div>
  </div>
);

export default AuthorProfile;
