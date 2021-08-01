import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";
import Image from "next/image";

export default function Works({ filteredPosts }) {
  return (
    <Layout title="works">
      <h2 className="text-3xl text-gray-800 mt-8 px-8 border-b border-gray-600">
        Works
      </h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/port.png"
              width={320}
              height={180}
              alt="portfolio"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">ポートフォリオ</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">HTML</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">CSS</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                GitHubPages
              </span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              htmlとcssを用いて作った簡単なポートフォリオサイトです。簡単な自己紹介とスキルスタックについて書いています。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://github.com/izukune/next_portfolio" target="_blank">
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/iroha-bot.png"
              width={320}
              height={180}
              alt="iroha-bot"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">Twitter Bot</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">Python</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                TwitterAPI
              </span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                DeepLearning
              </span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              RNNで自然言語処理を行った対話型エンジンです。リプライに対して（そこそこ笑）まともな返事をしてくれます。
            </p>
            <span className="text-red-500">今は使えません</span>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              {/* <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://github.com/izukune/" target="_blank">
                  GitHub
                </a>
              </p>
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://twitter.com/iroha14617299" target="_blank">
                  View
                </a>
              </p> */}
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/output.GIF"
              width={320}
              height={180}
              alt="PINN"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">方程式を解く人工知能</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">Python</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                TensorFlow
              </span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              PINNはPhysics Informed Neural
              Networkの略で物理学における微分方程式を深層学習で解くことができます。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a
                  href="https://github.com/izukune/PhysicsInformedNN"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/iroha-japan.png"
              width={320}
              height={180}
              alt="iroha-japan"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">IROHA JAPAN</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">PHP</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">wordpress</span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              外国人向けの日本の情報発信サービス。二人のキャラクターの対話形式でわかりやすくに日本を紹介します。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://japan-iroha.com" target="_blank">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/monolith.png"
              width={320}
              height={180}
              alt="monolith"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">株式会社Monolith</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">html</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">css</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">jQuery</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">PHP</span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              株式会社Monolith様のHPを制作しました。レンタルサーバーでPHPからお問い合わせフォームを導入しました。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://monolith-1001.co.jp/contact" target="_blank">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/iolite.png"
              width={320}
              height={180}
              alt="iolite"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">株式会社iolite</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">React</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                materialUI
              </span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              株式会社iolite様のHPを制作しました。create-react-appを採用しており、素早い開発を行うことができた。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://iolite.ltd" target="_blank">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl pb-4 w-80 rounded mx-8 my-8">
          <div className="">
            <Image
              src="/gps.png"
              width={320}
              height={180}
              alt="gps_mapping"
              className="rounded-tr-md rounded-tl-md"
            />
          </div>
          <div className="my-4">
            <p className="font-bold text-2xl">GPSMapping</p>
          </div>
          <div className="mt-1">
            <p>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">Python</span>
              <span className="bg-blue-200 p-1 mr-2 rounded-lg">
                flask
              </span>
            </p>
          </div>
          <div className="mt-4 px-8">
            <p className="font-bold">
              GPSを使ってユーザーの位置情報を取得して、位置を地図上にマッピングできるアプリ。出力したが画像はダウンロードできる。
            </p>
          </div>
          <div className="w-80">
            <div className="text-blue-800 flex flex-row justify-center items-center mt-2">
              <p className="mx-4 bg-gray-600 text-white rounded-full py-1 px-2 hover:bg-gray-200 hover:text-blue-800">
                <a href="https://shrouded-peak-95878.herokuapp.com/" target="_blank">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
