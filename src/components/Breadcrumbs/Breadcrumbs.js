import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

export default function Breadcrumbs({items = []}) {
    return(
        <nav className="breadcrumbs__wrapper">
            {items.length > 0 && items.map(({name, isActive}) => <BreadcrumbItem name={name} isActive={isActive} />)}
        </nav>
    )
}
