import * as S from './Header.style.ts';

const HeaderRight = () => {
    return (
        <S.HeaderItem className="header-right">
            <img src="src/assets/alarm.svg" alt="alarm-logo" id={`alarm-logo`}/>
            <S.Profile>
                <img src="src/assets/profile.svg" alt="profile" id={`profile-logo`}/>
                <S.ProfileInfo>
                    <S.Name><p id={`name`}>채근영</p></S.Name>
                    <S.Username><p id={`username`}>@chaeyn</p></S.Username>
                </S.ProfileInfo>
            </S.Profile>
        </S.HeaderItem>
    );
};

export default HeaderRight;