import React from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation({items = []}) {
    return(
        <aside className="navigation__wrapper">
            {items.length > 0
            && items.map(({name, isActive, icon, children}) =>
                <NavigationItem name={name} isActive={isActive} icon={icon} children={children} />)
            }
        </aside>
    )
}
