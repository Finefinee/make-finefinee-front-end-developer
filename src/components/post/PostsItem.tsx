import type Post from "../../data/post.ts";
import * as S from "./Post.style.ts";
import { useReadingStore } from "../../zustand/useReadingStore.ts";

interface PostsItemProps {
  id?: number;
  post: Post;
  setReadingPostId: (id: number) => void;
}

const PostsItem = ({ id, post, setReadingPostId }: PostsItemProps) => {
  const toggleIsReading = useReadingStore(state => state.toggleReading);
  const startReading = () => {
    // id를 이렇게 검사하는 것 보다 인터페이스를 용도에 맞게 분리하면 좋을 것 같은데 왜 안됨?
    if (id === undefined) {
      return;
    }
    toggleIsReading();
    setReadingPostId(id);
  };

  return (
    <article className="post">
      <S.PostTitle onClick={startReading}>{post.title}</S.PostTitle>
    </article>
  );
};

export default PostsItem;
