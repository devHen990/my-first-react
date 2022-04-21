import React, { useState, useEffect } from 'react';

const Menu = ({data}) => {
    const [currClick, setCurrClick] = useState(null);

    const menuClick = (e) => {
        document.querySelectorAll(".menuSelected").forEach((item,index,arr) => item.classList.remove("menuSelected"));
        e.target.classList.add("menuSelected");
    }

    useEffect((e) => {
        
    }, currClick);

    return (
        <li><span onClick={menuClick}>{data.menuName}</span></li>
    );
};

export default Menu; 