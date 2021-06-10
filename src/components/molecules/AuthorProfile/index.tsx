import React, { FC } from "react";
import styles from "./style.module.scss";

const AuthorProfile: FC = () => (
  <div>
    <div className={styles.iconWrapper}>
      <img className={styles.icon} src="/hoge/user.jpg" />
    </div>
  </div>
);

export default AuthorProfile;
