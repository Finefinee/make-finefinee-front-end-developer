import * as S from "./Header.style.ts";
import ClashLogo from "../../assets/clash-logo.svg";
import Menu from "../../assets/menu.svg";

const HeaderLeft = () => {
  return (
    <S.HeaderItem className="header-left">
      <img src={Menu} alt="menu button" id={`menu-logo`} />
      <img src={ClashLogo} alt="clash logo" id={`clash-logo`} />
    </S.HeaderItem>
  );
};

export default HeaderLeft;
