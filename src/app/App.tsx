import "./App.css";
import Header from "../components/header/Header.tsx";
import Menubar from "../components/menubar/Menubar.tsx";
import Posts from "../components/post/Posts.tsx";
import * as S from "./Content.style.ts";

function App() {
  return (
    <>
      <S.Root>
        <Header />
        <S.BodyContent>
          <Menubar />
          <S.MainContent>
            <Posts />
          </S.MainContent>
        </S.BodyContent>
      </S.Root>
    </>
  );
}

export default App;
