const HeaderRight = () => {
    return (
        <div className={`header-item right`}>
            <img src="src/assets/alarm.svg" alt="alarm-logo" id={`alarm-logo`}/>
            <div id={`profile`}>
                <img src="src/assets/profile.svg" alt="profile" id={`profile-logo`}/>
                <div id={`profile-info`}>
                    <p id={`name`}>채근영</p>
                    <p id={`username`}>@chaeyn</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderRight;