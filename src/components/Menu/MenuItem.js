import React from "react";

export default function MenuItem({name, isActive}) {
    return(
        <a href="/" className={`menu__item ${isActive ? 'menu__item-active' : ''}`}>
            {name}
        </a>
    )
}
