import * as S from "./Header.style.ts";
import { HeaderLeft, HeaderRight } from "./index.ts";

const Header = () => {
  return (
    <S.Padding>
      <S.Header>
        <HeaderLeft />
        <HeaderRight />
      </S.Header>
    </S.Padding>
  );
};

export default Header;
