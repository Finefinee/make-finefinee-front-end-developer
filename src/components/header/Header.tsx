import * as S from "./Header.style.ts"
import HeaderLeft from "./HeaderLeft.tsx";
import HeaderRight from "./HeaderRight.tsx";

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