import Layout from "../components/Layout";
import Image from "next/image";

export default function Blog() {
  return (
    <Layout title="Skills">
      <h2 className="text-3xl text-gray-800 mt-8 px-8 border-b border-gray-600">
        Skills
      </h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 w-80 lg:w-96 rounded mx-8 my-4">
          <div className="my-4">
            <p className="font-bold text-2xl">Frontend</p>
          </div>
          <div className="m-1">
            <p className="flex flex-row justify-center items-center flex-wrap">
              <span className="bg-blue-200 p-1 m-1 rounded-lg">HTML</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">CSS</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">JavaScript</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">TypeScript</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">React</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Next</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Elm</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Tailwind</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Unity</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="">
              このポートフォリオサイトはNext.jsとTailwind.cssを用いて作られています。Next.jsを使うことでISGを導入したwebページを構築することができます。
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 w-80 lg:w-96 rounded mx-8 my-4">
          <div className="my-4">
            <p className="font-bold text-2xl">Backend</p>
          </div>
          <div className="mt-1">
            <p className="flex flex-row justify-center items-center flex-wrap">
              <span className="bg-blue-200 p-1 m-1 rounded-lg">C/C++</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">PHP</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Python</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Django</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">GraphQL</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Node.js</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="">
              バックエンドは基本的にPythonを用いて開発しています。DjangoRestFrameworkを使うことによってAPIサーバーを構築することができます。機械学習モデルの推論を行うこともできます。
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 w-80 lg:w-96 rounded mx-8 my-4">
          <div className="my-4">
            <p className="font-bold text-2xl">Machine Learning</p>
          </div>
          <div className="mt-1">
            <p className="flex flex-row justify-center items-center flex-wrap">
              <span className="bg-blue-200 p-1 m-1 rounded-lg">
                scikit-learn
              </span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">TensorFlow</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Keras</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Pytorch</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="">
              大学では深層学習を用いた研究を行ってきました。大学院ではそれに加えてゲームAIに関する研究をする予定です。今は自然言語処理について勉強しています。
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-50 text-center shadow-xl p-8 w-80 lg:w-96 rounded mx-8 my-4">
          <div className="my-4">
            <p className="font-bold text-2xl">Other</p>
          </div>
          <div className="mt-1">
            <p className="flex flex-row justify-center items-center flex-wrap">
              <span className="bg-blue-200 p-1 m-1 rounded-lg">GitHub</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Docker</span>
              <span className="bg-blue-200 p-1 m-1 rounded-lg">Linux</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="">
              自分の書いたコードのバージョン管理はGitHubを用いて行っています。Pythonなどの環境構築にはDockerで外部からDocker
              imageを持ってきて使っています。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
