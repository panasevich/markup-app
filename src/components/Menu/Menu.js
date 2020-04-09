import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({items = []}) {
    return(
        <nav className="menu__wrapper">
            {items.length > 0 && items.map(({name, isActive}) => <MenuItem name={name} isActive={isActive} />)}
        </nav>
    )
}
