import * as ContentS from "./Content.style.ts";
import { Route, Routes, useNavigate } from "react-router";
import * as PostS from "../components/post/Post.style.ts";
import { deletePost } from "../api/postApi.ts";
import { useState } from "react";
import { PostContent, PostForm, Posts } from "../components/post/index.ts";
import { Header } from "../components/header/index.ts";
import { Menubar } from "../components/menubar/index.ts";
import { useReadingPostIdStore, useReadingStore } from "../store";

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
                  <PostS.PostsContainer>
                    <PostContent></PostContent>
                    <PostS.OnePostButtonContainer>
                      <PostS.GreenButton onClick={handleBack}>뒤로 가기</PostS.GreenButton>
                      <PostS.RedButton onClick={fetchDeletePost}>삭제</PostS.RedButton>
                    </PostS.OnePostButtonContainer>
                    {status === "done" && deleteSuccess === true && <div>삭제 성공!</div>}
                    {status === "error" && <div>에러 발생</div>}
                    {status === "loading" && <div>로딩 중...</div>}
                  </PostS.PostsContainer>
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
