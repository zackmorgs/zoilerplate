import React from 'react';

import NavMenu from './NavMenu';

export default function Layout ({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col">
            <NavMenu />
            <main>
                {children}
            </main>
            <footer id="footer_main">
                &copy; 2024 zoilerplate. All rights reserved.
            </footer>
        </div>
    );
}   