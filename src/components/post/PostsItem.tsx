import type Post from "../../data/post.ts";
import * as S from "./Post.style.ts";

interface PostProps {
  post: Post;
}

const PostsItem = ({ post }: PostProps) => {
  return (
    <article className="post">
      <S.PostTitle>{post.title}</S.PostTitle>
    </article>
  );
};

export default PostsItem;
