import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <div className="bg-white bg-opacity-50 hover:bg-opacity-80 text-center shadow-xl p-4 w-80 lg:w-96 rounded mx-4 my-2 cursor-pointer relative">
          <div className="my-2">
            <p className="font-mono text-sm lg:text-lg">{post.created_at}</p>
          </div>
          <div className="mt-1">
            <p className="text-1xl text-sm lg:text-lg">{post.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
