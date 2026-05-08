import { useEffect, useState } from "react";
import { getOne } from "../../api/postApi.ts";
import * as S from "./Post.style.ts";
import type Post from "../../types/post.ts";
import { useReadingPostIdStore } from "../../store/useReadingPostIdStore.ts";
import { useParams } from "react-router";

const PostContent = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");
  const setReadingPostId = useReadingPostIdStore(state => state.setReadingPostId);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setStatus("loading");
      try {
        const data: Post = await getOne(Number(postId));
        setPost(data);
        setStatus("done");
      } catch (e: unknown) {
        console.error(e);
        setStatus("error");
      }
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (postId) {
      setReadingPostId(Number(postId));
    }
  }, [postId, setReadingPostId]);

  return (
    <S.OnePostContainer>
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>로딩 중...</div>}
      <S.OnePostTitle>{post ? post.title : ""}</S.OnePostTitle>
      <S.OnePostContent>{post ? post.content : ""}</S.OnePostContent>
    </S.OnePostContainer>
  );
};

export default PostContent;
