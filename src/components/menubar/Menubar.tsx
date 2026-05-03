import MenubarItem from "./MenubarItem.tsx";
import * as S from "./Menubar.style.ts";

const imgNames: string[] = ["home.svg", "compete.svg", "record.svg", "shop.svg", "roadmap.svg"];
const MenuNames: string[] = ["홈", "경쟁", "기록", "상점", "로드맵"];

const Menubar = () => {
    return (
        <S.Container>
            <S.Menubar>
                {imgNames.map((value, index) => {
                    return <MenubarItem key={index} imgName={value} MenuName={MenuNames[index]} />
                })}
            </S.Menubar>
        </S.Container>
    );
};

export default Menubar;