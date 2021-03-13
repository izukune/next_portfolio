import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

export default function Skill({ filteredPosts }) {
  return (
    <Layout title="Skill">
      <h2 className="text-3xl text-gray-800 mt-8 px-8 border-b border-gray-600">
        Blog
      </h2>
      <p className="text-sm lg:text-lg text-gray-800 my-4 px-4">
        このブログはDjangoで作ったAPIサーバーからJSONデータを受け取っています。
      </p>
      <div className="flex flex-row justify-center items-center flex-wrap relative">
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredPosts = await getAllPostsData();
  return {
    props: { filteredPosts },
    revalidate: 3,
  };
}
