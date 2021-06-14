import useWindowSize from "@rooks/use-window-size";
import { useRouter } from "next/dist/client/router";
import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { Row, Col, Container } from "react-grid-system";
import styles from "./style.module.scss";
import Footer from "components/organisms/Footer";

const Landing: FC = () => {
  const { innerHeight } = useWindowSize();
  const headerStyle = useMemo<CSSProperties>(
    () => ({
      height: `${innerHeight * 0.9}px`,
    }),
    [innerHeight]
  );
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/signin");
  }, [router]);

  return (
    <div>
      <header className={styles.header} style={headerStyle}>
        <div className={styles.headerInner}>
          <h1 className={styles.heading1}>Twiv</h1>
          <p>ツイッターの漫画を手元に</p>
          <button onClick={handleClick}>ログイン</button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <section className={styles.section}>
            <h2 className={styles.heading2}>Twivについて</h2>
            <p>
              Twitterに投稿された漫画をいつでも簡単に読めるようになります。
              <br />
              またTwitterに投稿した漫画の管理が簡単になります。
              <br />
              「Twitter」×「Comic Viewer」から「Twiv」と名付けました。
              <br />
              「ついぶ」とか「つうぃぶ」とか「ついゔ」と呼んでください。
            </p>
          </section>
          <hr />
          <section className={styles.section}>
            <h2 className={styles.heading2}>Twivの機能（閲覧者向け）</h2>
            <Container className={styles.container} fluid={true}>
              <Row gutterWidth={36}>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>お気に入り機能</h3>
                    <p>
                      気に入った漫画はお気に入りに追加することで本棚に格納されます。
                      <br />
                      Twitterの「いいね」と似ていますが、投稿者の方へ通知がいくことはありません。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>本棚検索機能</h3>
                    <p>
                      本棚の漫画を検索することができます。
                      <br />
                      詳細な検索が可能なため、たくさんお気に入りしていただいても大丈夫です。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>ダークモード機能</h3>
                    <p>
                      全体的な配色を白基調と黒基調で切り替えることができます。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>事前警告機能</h3>
                    <p>
                      エッチな漫画やグロテスクな漫画を読む前には警告が表示されます。
                    </p>
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
          <hr />
          <section className={styles.section}>
            <h2 className={styles.heading2}>Twivの機能（投稿者向け）</h2>
            <Container className={styles.container} fluid={true}>
              <Row gutterWidth={36}>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>Amazon宣伝機能</h3>
                    <p>
                      投稿者の方が著者などである書籍などを宣伝することが可能です。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>オススメ漫画紹介機能</h3>
                    <p>
                      自分の漫画を読んでくださった方に、自分の好きな漫画をオススメすることができます。
                      <br />
                      友達の漫画をオススメするも良し、もっと人気が出てほしい漫画をオススメするも良し、お好きにどうぞ。
                      <br />
                      ちなみにお気に入りの漫画とオススメの漫画は別枠となっています。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>編集機能</h3>
                    <p>
                      投稿した漫画の一部やタイトルなどを後から差し替えたりすることができます。
                    </p>
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
          <hr />
          <section className={styles.section}>
            <h2 className={styles.heading2}>Twivの特徴</h2>
            <Container className={styles.container} fluid={true}>
              <Row gutterWidth={36}>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>
                      投稿された漫画の検索機能はありません
                    </h3>
                    <p>
                      サーバーの費用が払えなくなりそうなのと、そもそもあまり需要がなさそうなので投稿された漫画の検索機能は作りません。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>
                      オフライン機能はありません
                    </h3>
                    <p>
                      著作権の関係など諸々を考慮し対応しません。
                      <br />
                      インターネットに繋いでいる状態でご利用ください。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>
                      Webサービスですがスマホアプリにもなります
                    </h3>
                    <p>
                      スマホの場合、Webサービスとして使用されると面倒くさいと思いますので、ぜひアプリとしてダウンロードしていただければと思います。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>
                      2週間誰にも読まれなかった漫画は自動的に削除されます
                    </h3>
                    <p>
                      サーバー費用を少しでも抑えるための仕様となっています。
                      <br />
                      期間については調整中ですので予告なく期間が変わる場合もあるかもしれません。
                    </p>
                  </section>
                </Col>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>利用料金は0円です。</h3>
                    <p>
                      利用料金は一生0円にしようと思っています。
                      <br />
                      ただそうするとサーバー費用がいつか払いきれなくなるため、何かしらの課金システムは追加したいと思っています。
                      <br />
                      広告とかはイヤなので、絶賛悩み中です。
                    </p>
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
          <hr />
          <section className={styles.section}>
            <h2 className={styles.heading2}>禁止事項</h2>
            <Container className={styles.container} fluid={true}>
              <Row gutterWidth={36}>
                <Col className={styles.col} lg={4} md={6} sm={12}>
                  <section>
                    <h3 className={styles.heading3}>
                      漫画でない画像を投稿する
                    </h3>
                    <p>
                      Twivは漫画のみを扱うことを許可します。
                      <br />
                      小説やイラスト、写真などを投稿しないでください。
                    </p>
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
