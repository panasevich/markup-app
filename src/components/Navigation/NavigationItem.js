import React from "react";

export default function MenuItem({name, isActive, icon, children}) {
    return(
        <div className={`navigation__item ${isActive ? 'navigation__item-active' : ''}`}>
            <div className={`navigation__text ${icon ? 'navigation__text-icon' : ''}`}>
                {icon && <i className="material-icons navigation__icon">{icon}</i>}
                {name}
            </div>
            {children && children.map(({name, icon}) =>
                <div className={`navigation__item ${isActive ? 'navigation__item-active' : ''} 
                ${icon ? 'navigation__item-with-icon' : ''}`}>
                    <div className={`navigation__text ${icon && 'navigation__text-icon'}`}>
                        {icon && <i className="material-icons navigation__icon">{icon}</i>}
                        {name}
                    </div>
            </div>)}
        </div>
    )
}
