import Layout from "../components/Layout";
import Image from "next/image";
import SkillCard from "../components/SkillCard";

export default function Blog() {
  const frontEnd = ["JavaScript", "TypeScript", "React", "Tailwind"];
  const backEnd = ["C/C++", "C#", "Python", "Node.js"];
  const MachineLearning = ["TensorFrow", "Keras", "PyTorch"];
  const otherSkill = ["GitHub", "Docker", "Linux"];
  return (
    <Layout title="Skills">
      <h2 className="text-3xl text-gray-800 mt-8 px-8 border-b border-gray-600">
        Skills
      </h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <SkillCard
          title="FrontEnd"
          comment="フロントエンドは基礎的なコーディングからReactやNextを用いたモダンな開発まで行うことができます。CSSのフレームワークはほとんどの場合、Tsilwind.cssを使って開発速度を意識しています。"
        >
          <p className="flex flex-row justify-center items-center flex-wrap">
            {frontEnd.map((skill, i) => (
              <span className="bg-blue-200 p-1 m-1 rounded-lg" key={i}>
                {skill}
              </span>
            ))}
          </p>
        </SkillCard>

        <SkillCard
          title="backEnd"
          comment="大学では人工知能の研究を行なってきたのでPythonがもっとも得意な言語です。それ以外にも数値計算などでC++、UnityなどでC#を扱ってきました。"
        >
          <p className="flex flex-row justify-center items-center flex-wrap">
            {backEnd.map((skill, i) => (
              <span className="bg-blue-200 p-1 m-1 rounded-lg" key={i}>
                {skill}
              </span>
            ))}
          </p>
        </SkillCard>

        <SkillCard
          title="MachineLearning"
          comment="大学の研究ではTensorFlowとKerasを用いて人工知能モデルを開発してきました。最近は自然言語処理の分野を勉強しているところです。"
        >
          <p className="flex flex-row justify-center items-center flex-wrap">
            {MachineLearning.map((skill, i) => (
              <span className="bg-blue-200 p-1 m-1 rounded-lg" key={i}>
                {skill}
              </span>
            ))}
          </p>
        </SkillCard>

        <SkillCard
          title="otherSkill"
          comment="プログラムのバージョン管理にはGitHubを使っています。仮想開発環境の構築にはDockerを使っています。"
        >
          <p className="flex flex-row justify-center items-center flex-wrap">
            {otherSkill.map((skill, i) => (
              <span className="bg-blue-200 p-1 m-1 rounded-lg" key={i}>
                {skill}
              </span>
            ))}
          </p>
        </SkillCard>
      </div>
    </Layout>
  );
}
