import type Post from "../../types/post.ts";
import * as S from "./Post.style.ts";
import { useReadingStore } from "../../store/useReadingStore.ts";
import { useNavigate } from "react-router";
import { useReadingPostIdStore } from "../../store/useReadingPostIdStore.ts";

interface PostsItemProps {
  post: Post;
}

const PostsItem = ({ post }: PostsItemProps) => {
  const navigate = useNavigate();
  const toggleIsReading = useReadingStore(state => state.toggleReading);
  const setReadingPostId = useReadingPostIdStore(state => state.setReadingPostId);
  const startReading = () => {
    toggleIsReading();
    setReadingPostId(post.id);
    navigate(`/posts/${post.id}`);
  };

  return (
    <article className="post">
      <S.PostTitle onClick={startReading}>{post.title}</S.PostTitle>
    </article>
  );
};

export default PostsItem;
