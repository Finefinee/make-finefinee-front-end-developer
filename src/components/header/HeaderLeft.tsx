import * as S from "./Header.style.ts";

const HeaderLeft = () => {
  return (
    <S.HeaderItem className="header-left">
      <img src="src/assets/menu.svg" alt="menu button" id={`menu-logo`} />
      <img src="src/assets/clash-logo.svg" alt="clash logo" id={`clash-logo`} />
    </S.HeaderItem>
  );
};

export default HeaderLeft;
