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
            title="自己紹介"
            image_url="/izuku_image.JPG"
            sub_title="Izukune Yoshiki"
            content="私は大学院で人工知能に関する研究をしたり個人でアプリ開発をしています。最近の興味は自然言語処理と音声合成です。"
            slide_message="  Slide Card ▷"
          />

          <IzuCard
            title="学部生時代"
            image_url="/soccer.jpg"
            sub_title="素粒子物理学"
            content="学部時代は物理学を専攻していて、特に素粒子理論の研究室に所属していました。そこでは深層学習を物理学に応用する研究を行ってきました。"
            slide_message="◁ Slide Card ▷"
          />

          <IzuCard
            title="アルバイト"
            image_url="/fountain.jpg"
            sub_title="AIベンチャー"
            content="AIベンチャーでエンジニアのアルバイトをしています。職務内容はデータベース構築からTopicモデルや音に関するAIの開発まで幅広く行っています。"
            slide_message="◁ Slide Card ▷"
          />

          <IzuCard
            title="大学院"
            image_url="/chara.jpg"
            sub_title="AIエージェント / ゲームAI"
            content="大学院ではゲームAIを用いた研究を行っています。特にキャラクターAIの分野に興味があり、広い領域での研究がメインになっています。"
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
