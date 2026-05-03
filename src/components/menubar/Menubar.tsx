import MenubarItem from "./MenubarItem.tsx";
import MenubarContainer from "./MenubarContainer.tsx";

const imgNames: string[] = ["home.svg", "compete.svg", "record.svg", "shop.svg", "roadmap.svg"];
const MenuNames: string[] = ["홈", "경쟁", "기록", "상점", "로드맵"];

const Menubar = () => {
    return (
        <MenubarContainer>
            <div id={`menubar`}>
                {imgNames.map((value, index) => {
                    return <MenubarItem imgName={value} MenuName={MenuNames[index]} />
                })}
            </div>
        </MenubarContainer>
    );
};

export default Menubar;