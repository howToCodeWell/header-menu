import React from 'react';
import menu from '../menu'

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.menu = menu;
    }

    render() {
        return (
            <header className={'bg-black pt-6 pb-6 mb-6'}>
                <nav id={'menuMenu'} className={'flex items-center justify-between flex-wrap  mr-auto ml-auto w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 '}>
                    <div className={'flex items-center flex-shrink-0 text-white mr-6'}>
                        <span className={'font-semibold text-xl tracking-tight'}>How To Code Well</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-end w-full flex lg:w-auto">
                        <div className="text-m lg:flex-grow">
                            {this.menu.items.map((item, key) =>
                                <a key={key} className="block mt-4 font-bold lg:inline-block lg:mt-0 text-white hover:text-pink-600 hover:no-underline mr-4"
                                   href={item.link}>{item.name}</a>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderMenu;