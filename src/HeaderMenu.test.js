import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderMenu from "./HeaderMenu";


describe('HeaderMenu', () => {
    test('renders the default menu items', async () => {
        render(<HeaderMenu/>);
        expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
        expect(screen.getByText('Menu Item 2')).toBeInTheDocument();
    });

    test('renders the default menu links', async () => {
        render(<HeaderMenu/>);

        const link1 = await screen.findByText('Menu Item 1')
        expect(link1).toHaveAttribute('href', '/menu-item-1');

        const link2 = await screen.findByText('Menu Item 2')
        expect(link2).toHaveAttribute('href', '/menu-item-2');
    });

    test('renders custom menu items', async () => {
        const options = {
            "items": [
                {
                    "name": "Test Item 1",
                    "url": "/test-item-1"
                },
                {
                    "name": "Test Item 2",
                    "url": "/test-item-2"
                },
            ]
        }
        render(<HeaderMenu menu={options}/>);

        const link1 = await screen.findByText('Test Item 1')
        expect(link1).toHaveAttribute('href', '/test-item-1');

        const link2 = await screen.findByText('Test Item 2')
        expect(link2).toHaveAttribute('href', '/test-item-2');
    });

});

