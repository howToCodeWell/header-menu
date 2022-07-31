import React from 'react';

function HeaderMenu(props) {
    return (
        <nav>
            <ul>
                {props.menu.items.map((item, key) =>
                    <li key={`li-` + key}><a key={key} href={item.url}>{item.name}</a></li>
                )}
            </ul>
        </nav>
    )
}

HeaderMenu.defaultProps = {
    menu: {
        items: [
            {
                name: "Menu Item 1",
                url: "/menu-item-1"
            },
            {
                name: "Menu Item 2",
                url: "/menu-item-2"
            }
        ]
    }
}

export default HeaderMenu;