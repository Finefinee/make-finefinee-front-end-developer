import * as S from "./Header.style.ts";
import Alarm from "../../assets/alarm.svg";
import Profile from "../../assets/profile.svg";
import { useWritingStore } from "../../store/useWritingStore.ts";
import { useNavigate } from "react-router";

const HeaderRight = () => {
  const isWriting = useWritingStore(state => state.isWriting);
  const toggleWriting = useWritingStore(state => state.toggleWriting);
  const navigate = useNavigate();

  const handleWriting = () => {
    if (isWriting) {
      navigate("/posts");
    } else {
      navigate("/posts/new");
    }
    toggleWriting();
  };

  return (
    <S.HeaderItem className="header-right">
      <S.roundTextBox onClick={handleWriting}>
        {isWriting ? "작성 취소" : "새 글 작성"}
      </S.roundTextBox>
      <img src={Alarm} alt="alarm-logo" id={`alarm-logo`} />
      <S.Profile>
        <img src={Profile} alt="profile" id={`profile-logo`} />
        <S.ProfileInfo>
          <S.Name>채근영</S.Name>
          <S.Username>@chaeyn</S.Username>
        </S.ProfileInfo>
      </S.Profile>
    </S.HeaderItem>
  );
};

export default HeaderRight;
