import type Post from "../../data/post.ts";
import * as S from "./Post.style.ts";
import { useReadingStore } from "../../zustand/useReadingStore.ts";

interface PostsItemProps {
  post: Post;
  setReadingPostId: (id: number) => void;
}

const PostsItem = ({ post, setReadingPostId }: PostsItemProps) => {
  const toggleIsReading = useReadingStore(state => state.toggleReading);
  const startReading = () => {
    toggleIsReading();
    setReadingPostId(post.id);
  };

  return (
    <article className="post">
      <S.PostTitle onClick={startReading}>{post.title}</S.PostTitle>
    </article>
  );
};

export default PostsItem;
