import Header from "../components/header/Header.tsx";
import Menubar from "../components/menubar/Menubar.tsx";
import Posts from "../components/post/Posts.tsx";
import * as ContentS from "./Content.style.ts";
import { Route, Routes, useNavigate } from "react-router";
import PostForm from "../components/post/PostForm.tsx";
import * as PostS from "../components/post/Post.style.ts";
import * as S from "../components/post/Post.style.ts";
import PostContent from "../components/post/PostContent.tsx";
import { useReadingStore } from "../store/useReadingStore.ts";
import { deletePost } from "../api/postApi.ts";
import { useState } from "react";
import { useReadingPostIdStore } from "../store/useReadingPostIdStore.ts";

function App() {
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const [status, setStatus] = useState<"done" | "loading" | "error" | "blank">("done");
  const toggleIsReading = useReadingStore(state => state.toggleReading);
  const readingPostId = useReadingPostIdStore(state => state.readingPostId);
  const navigate = useNavigate();

  const handleBack = () => {
    toggleIsReading();
    setDeleteSuccess(false);
    navigate("/posts");
  };

  const fetchDeletePost = async () => {
    setStatus("loading");
    try {
      if (readingPostId !== null) {
        await deletePost(readingPostId);
      }
      setStatus("done");
      setDeleteSuccess(true);
    } catch (e: unknown) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <Routes>
      <Route
        path={"/posts"}
        element={
          <>
            <ContentS.GlobalStyles />
            <ContentS.Root>
              <Header />
              <ContentS.BodyContent>
                <Menubar />
                <ContentS.MainContent>
                  <Posts />
                </ContentS.MainContent>
              </ContentS.BodyContent>
            </ContentS.Root>
          </>
        }
      />
      <Route
        path={"/posts/new"}
        element={
          <>
            <ContentS.GlobalStyles />
            <ContentS.Root>
              <Header />
              <ContentS.BodyContent>
                <Menubar />
                <ContentS.MainContent>
                  <PostS.PostsContainer>
                    <PostForm></PostForm>
                  </PostS.PostsContainer>
                </ContentS.MainContent>
              </ContentS.BodyContent>
            </ContentS.Root>
          </>
        }
      />
      <Route
        path={"/posts/:postId"}
        element={
          <>
            <ContentS.GlobalStyles />
            <ContentS.Root>
              <Header />
              <ContentS.BodyContent>
                <Menubar />
                <ContentS.MainContent>
                  <S.PostsContainer>
                    <PostContent></PostContent>
                    <S.OnePostButtonContainer>
                      <S.GreenButton onClick={handleBack}>뒤로 가기</S.GreenButton>
                      <S.RedButton onClick={fetchDeletePost}>삭제</S.RedButton>
                    </S.OnePostButtonContainer>
                    {status === "done" && deleteSuccess === true && <div>삭제 성공!</div>}
                    {status === "error" && <div>에러 발생</div>}
                    {status === "loading" && <div>로딩 중...</div>}
                  </S.PostsContainer>
                </ContentS.MainContent>
              </ContentS.BodyContent>
            </ContentS.Root>
          </>
        }
      />
    </Routes>
  );
}

export default App;
