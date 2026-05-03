import './App.css'
import Header from "../components/header/Header.tsx";
import Menubar from "../components/menubar/Menubar.tsx";
import MainContent from "../style/MainContent.style.ts";
import Posts from "../components/post/Posts.tsx";
import Content from "../style/Content.style.ts";

function App() {

  return (
    <>
      <Header />
      <Content>
          <Menubar />
          <MainContent>
              <Posts />
          </MainContent>
      </Content>
    </>
  )
}

export default App
