import type Post from "../../data/post.ts";

interface PostProps {
  post: Post;
}

const PostsItem = ({ post }: PostProps) => {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
};

export default PostsItem;
