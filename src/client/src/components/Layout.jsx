import React from 'react';

import NavMenu from './NavMenu';

export default function Layout ({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavMenu />
                {/* NavMenu component will go here */}
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; 2024 zoilerplate. All rights reserved.
            </footer>
        </div>
    );
}   