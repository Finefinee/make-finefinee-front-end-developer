interface ItemProps {
    MenuName: string;
    imgName: string;
}

const MenubarItem = ({MenuName, imgName}: ItemProps) => {
    return (
        <div className={`menubar-item`}>
            <img src={`src/assets/${imgName}`} alt={MenuName}/>
            <h2>{MenuName}</h2>
        </div>
    );
};

export default MenubarItem;