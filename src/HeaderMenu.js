import React from 'react';

const defaultMenu = {
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


function HeaderMenu({menu = defaultMenu}) {
    return (
        <nav>
            <ul>
                { menu.items.map((item, key) =>
                    <li key={`li-` + key}><a key={key} href={item.url}>{item.name}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default HeaderMenu;