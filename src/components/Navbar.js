// src/components/Navbar.js

import React from 'react';

const Navbar = () =>
{
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo"
                        className="w-8 h-8"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-gray-700">
                    <li className="hover:text-gray-900 cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer">New Blog</li>
                    <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
                </ul>

                {/* Log In Button */}
                <div>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 flex items-center"
                    >
                        Log in <span className="ml-1">→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
