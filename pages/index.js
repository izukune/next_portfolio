import Layout from "../components/Layout";
import IzuCard from "../components/IzuCard";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    padding: "0 30px",
  },
  slideContainer: {
    padding: "0 10px",
  },
};

export default function Home() {
  return (
    <Layout title="Home">
      <h2 className="text-3xl text-gray-800 px-8 mt-8 border-b border-gray-600">
        About
      </h2>
      <div className="w-96">
        <EnhancedSwipeableViews
          enableMouseEvents
          interval={6000}
          style={styles.root}
          slideStyle={styles.slideContainer}
        >
          <IzuCard
            title="Izukune Yoshiki"
            image_url="/izuku_image.JPG"
            sub_title="東京理科大学 → 立教大学大学院"
            content="私のポートフォリオにきてくれてありがとうございます。私は学部時代に物理学に深層学習を用いる研究をしていましたが、深層学習の面白さに気が付き人工知能の大学院に進学しました。"
            slide_message="  Slide Card ▷"
          />

          <IzuCard
            title="Hobby"
            image_url="/fountain.jpg"
            sub_title="アニメ / ゲーム / 万年筆"
            content="休日は基本的にアニメをみたりゲームをしています。一番好きなゲームはぷよぷよです。あとは大学の指導教官から万年筆をもらったのをきっかけに万年筆の沼にはまってきています笑"
            slide_message="◁ Slide Card ▷"
          />

          <IzuCard
            title="学部生時代"
            image_url="/soccer.jpg"
            sub_title="素粒子物理学"
            content="学部時代は物理学を専攻していて、特に素粒子理論の研究室に所属していました。ですので物理学というよりは数学に近いような内容について研究していました。"
            slide_message="◁ Slide Card ▷"
          />

          <IzuCard
            title="大学院"
            image_url="/chara.jpg"
            sub_title="AIエージェント / 圏論"
            content="大学院ではAR上のAIエージェントを用いた観光支援の研究を行なっています。それに加えて圏論とホモトピーのような論理学よりの勉強もしています。"
            slide_message="◁ Slide Card  "
          />
        </EnhancedSwipeableViews>
      </div>

      <div className="w-96">
        <div className="text-blue-700 flex flex-row justify-center items-center text-sm lg:text-lg">
          <p className="mx-4 hover:text-gray-500">
            <a href="https://github.com/izukune" target="_blank">
              GitHub
            </a>
          </p>
          <p className="mx-4 hover:text-gray-500">
            <a href="https://twitter.com/izukunKK" target="_blank">
              Twitter
            </a>
          </p>
          <p className="mx-4 hover:text-gray-500">
            <a href="https://qiita.com/izukunKK" target="_blank">
              Qiita
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
