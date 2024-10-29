
import React from 'react';

const Navbar = () =>
{
    return (
        <nav className="bg-white shadow-md">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
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
                    <li className="cursor-pointer hover:text-gray-900"><a href="/">Home</a></li>
                    <li className="cursor-pointer hover:text-gray-900"><a href="/create">New Blog</a></li>
                    <li className="cursor-pointer hover:text-gray-900"><a href="/blogs">Blogs</a></li>
                </ul>

                {/* Log In Button */}
                <div>
                    <a
                        href="#"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                        Log in <span className="ml-1">→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
