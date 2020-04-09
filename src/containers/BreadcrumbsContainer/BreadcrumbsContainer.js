import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const menuMock = [
    {name: "Home", isActive: false},
    {name: "Products", isActive: true},
    {name: "Company", isActive: false},
    {name: "Blog", isActive: false},
];

export default function BreadcrumbsContainer({items = menuMock}) {
    return(<Breadcrumbs items={items} />)
}
