import Layout from "../components/Layout";
import IzuCard from "../components/IzuCard";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

export default function Home() {
  return (
    <Layout title="Home">
      <h2 className="text-3xl text-gray-800 px-8 mt-4 border-b border-gray-600">
        About
      </h2>
      <EnhancedSwipeableViews enableMouseEvents interval={12000}>
        <IzuCard
          title="Izukune Yoshiki"
          image_url="/izuku_image.JPG"
          sub_title="東京理科大学 ▷ 立教大学大学院"
          content="学部時代は深層学習を物理学に応用する研究を行ってきました。大学院ではゲームAIの研究をする予定です。"
          slide_message="  Slide Card ▷"
        />

        <IzuCard
          title="Hobby"
          image_url="/fountain.jpg"
          sub_title="プログラミング・アニメ・万年筆・犬"
          content="休日はプログラムを書いたりアニメをみてます。最近、教授から万年筆をもらい、万年筆の沼にハマりました笑"
          slide_message="◁ Slide Card ▷"
        />

        <IzuCard
          title="理科大生時代"
          image_url="/soccer.jpg"
          sub_title="物理・サッカー・飲食バイト"
          content="大学で物理を勉強し、サークルでサッカーをして、飲食店の厨房でアルバイトをしていました。"
          slide_message="◁ Slide Card  "
        />
      </EnhancedSwipeableViews>

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
