import Header from "../components/header/Header.tsx";
import Menubar from "../components/menubar/Menubar.tsx";
import Posts from "../components/post/Posts.tsx";
import * as ContentS from "./Content.style.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import PostForm from "../components/post/PostForm.tsx";
import * as PostS from "../components/post/Post.style.ts";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
