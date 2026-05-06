import MenubarItem from "./MenubarItem.tsx";
import * as S from "./Menubar.style.ts";
import Home from "../../assets/home.svg";
import Compete from "../../assets/Compete.svg";
import Record from "../../assets/record.svg";
import Shop from "../../assets/shop.svg";
import Roadmap from "../../assets/roadmap.svg";

type name = string[];

const imgNames: name = [Home, Compete, Record, Shop, Roadmap];

const MenuNames: name = ["홈", "경쟁", "기록", "상점", "로드맵"];

const Menubar = () => {
  return (
    <S.Container>
      <S.Menubar>
        {imgNames.map((value, index) => {
          return <MenubarItem key={index} imgName={value} MenuName={MenuNames[index]} />;
        })}
      </S.Menubar>
    </S.Container>
  );
};

export default Menubar;
