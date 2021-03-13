import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-4 text-sm lg:text-lg font-bold text-gray-800">
        {post.title}
      </p>
      <p className="mb-12 text-sm lg:text-lg text-gray-800">
        {post.created_at}
      </p>
      <p className="px-10 text-sm lg:text-lg text-gray-800 w-4/5">
        {post.content}
      </p>

      <Link href="/blog">
        <div className="flex cursor-pointer mt-12 bg-gray-200 hover:bg-purple-700 p-2 rounded-full text-gray-700 hover:text-gray-200 border border-gray-800">
          <svg
            className="w-6 h-6 text-1xl"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
        </div>
      </Link>
      <p>戻る</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
