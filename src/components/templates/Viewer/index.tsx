import React, { CSSProperties, FC, useMemo } from "react";
import ComicViewer from "react-comic-viewer";
import styles from "./style.module.scss";
import useWindowSize from "@rooks/use-window-size";
import { Container, Row, Col } from "react-grid-system";
import ComicSeries from "components/organisms/ComicSeries";
import AuthorProfile from "components/molecules/AuthorProfile";
import Footer from "components/organisms/Footer";

const Viewer: FC = () => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({
      minHeight: innerHeight,
    }),
    []
  );

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <ComicViewer
        pages={[
          null,
          "/hoge/0.jpg",
          "/hoge/1.jpg",
          "/hoge/2.jpg",
          "/hoge/3.jpg",
          "/hoge/4.jpg",
          "/hoge/5.jpg",
          "/hoge/6.jpg",
          null,
        ]}
        text={{
          expansion: "拡大",
          fullScreen: "全画面",
          move: "移動",
          normal: "通常",
        }}
      />
      <main className={styles.main}>
        <Container className={styles.container} fluid={true}>
          <Row gutterWidth={24}>
            <Col className={styles.col} lg={8} sm={12}>
              <ComicSeries />
            </Col>
            <Col className={styles.col} lg={4} sm={12}>
              <AuthorProfile />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Viewer;
