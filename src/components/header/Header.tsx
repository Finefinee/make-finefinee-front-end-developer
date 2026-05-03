import HeaderPadding from "../../style/HeaderPadding.style.ts";
import HeaderLeft from "./HeaderLeft.tsx";
import HeaderRight from "./HeaderRight.tsx";

const Header = () => {
    return (
        <HeaderPadding>
            <div id={`header`}>
                <HeaderLeft />
                <HeaderRight />
            </div>
        </HeaderPadding>
    );
};

export default Header;