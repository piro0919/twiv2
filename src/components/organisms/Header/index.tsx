import React, { FC, useContext } from "react";
import styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";
import UserContext from "contexts/UserContext";

const Header: FC = () => {
  const {
    user: { photoUrl },
  } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Heading1 />
        <div className={styles.iconWrapper}>
          <img alt="user" className={styles.icon} src={photoUrl} />
        </div>
      </div>
    </header>
  );
};

export default Header;
