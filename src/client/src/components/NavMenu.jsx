import React from 'react';

export default function NavMenu() {
    return (
        <nav id="nav_menu" className="w-full">
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
}   