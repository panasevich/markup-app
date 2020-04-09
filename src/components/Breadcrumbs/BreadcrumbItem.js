import React from "react";

export default function BreadcrumbItem({name, isActive}) {
    return(
        <a href="/" className={`breadcrumbs__item ${isActive ? 'breadcrumbs__item-active' : ''}`}>
            {name}
        </a>
    )
}
