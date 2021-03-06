import menu from '../menu'
import React, {Component} from 'react';

class HeaderMenu extends Component {
    handleClick(e) {
        document.getElementById("nav-content").classList.toggle("hidden");
    }

    render() {
        return (
            <header className="bg pt-6 pb-6 mb-6">
                <nav id="menuMenu"
                     className="container mx-auto px-4">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                            <a href="/" className="font-semibold text-lg tracking-tight">How To Code Well</a>
                        </div>
                            <div className="block lg:hidden justify-end">
                                <button
                                    onClick={this.handleClick}
                                    id="nav-toggle"
                                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                    </svg>
                                </button>
                            </div>
                        <div className="w-full lg:w-auto hidden lg:block flex lg:w-auto" id="nav-content">
                            <div className="text-m lg:flex-grow">
                                {menu.items.map((item, key) =>
                                    <a key={key}
                                       className="block mt-4 font-bold lg:inline-block lg:mt-0 text-white hover:text-pink-600 hover:no-underline mr-4"
                                       href={item.url}>{item.name}</a>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderMenu;