import React from 'react';
import Menu from './Menu';
import './TopMenu.css';

const TopMenu = () => {
    const getMenuList = () => {
        const menuList = [
            { menuId: 1, menuName: "메뉴1" },
            { menuId: 2, menuName: "메뉴2" },
            { menuId: 3, menuName: "메뉴3" },
            { menuId: 4, menuName: "메뉴4" },
            { menuId: 5, menuName: "메뉴5" }
        ];
        return menuList;
    };

    return (
        <div className="menu">
            <nav className="clearfix">
                <ul className="clearfix">
                    {
                        getMenuList().map((data, index) => (
                           <Menu data={data} key={data.menuId}/>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );  
};

export default TopMenu;