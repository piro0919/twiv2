import Link from "next/link";
import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import styles from "./style.module.scss";
import ComicItem from "components/molecules/ComicItem";

const Comics: FC = () => (
  <Container className={styles.container} fluid={true}>
    <Row gutterWidth={36}>
      <Col className={styles.col} md={6} sm={12} xl={4}>
        <Link href="/comics/hoge">
          <a>
            <ComicItem />
          </a>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Comics;
