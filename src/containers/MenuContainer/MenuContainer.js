import React from "react";
import Menu from "../../components/Menu/Menu";

const menuMock = [
    {name: "Home", isActive: false},
    {name: "Products", isActive: true},
    {name: "Company", isActive: false},
    {name: "Blog", isActive: false},
];

export default function MenuContainer({items = menuMock}) {
    return(<Menu items={items} />)
}
