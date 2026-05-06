import * as S from "./Menubar.style.ts";

interface ItemProps {
  MenuName: string;
  imgName: string;
}

const MenubarItem = ({ MenuName, imgName }: ItemProps) => {
  return (
    <S.MenubarItem>
      <img src={`${imgName}`} alt={MenuName} />
      <S.MenuName>{MenuName}</S.MenuName>
    </S.MenubarItem>
  );
};

export default MenubarItem;
