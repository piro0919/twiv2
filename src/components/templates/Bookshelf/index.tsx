import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useMemo } from "react";
import useMeasure from "react-use-measure";
import styles from "./style.module.scss";
import Comics from "components/organisms/Comics";
import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";

const Bookshelf: FC = () => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({
      minHeight: `${innerHeight}px`,
    }),
    [innerHeight]
  );
  const [ref, { height }] = useMeasure();
  const innerStyle = useMemo<CSSProperties>(
    () => ({
      paddingTop: `${height}px`,
    }),
    [height]
  );

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <div style={innerStyle}>
        <div className={styles.headerWrapper} ref={ref}>
          <Header />
        </div>
        <main className={styles.main}>
          <div className={styles.mainInner}>
            <Comics />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Bookshelf;
