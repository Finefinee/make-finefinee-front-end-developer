import * as S from "./Menubar.style.ts";

interface ItemProps {
    MenuName: string;
    imgName: string;
}

const MenubarItem = ({MenuName, imgName}: ItemProps) => {
    return (
        <S.MenubarItem>
            <img src={`src/assets/${imgName}`} alt={MenuName}/>
            <h2>{MenuName}</h2>
        </S.MenubarItem>
    );
};

export default MenubarItem;