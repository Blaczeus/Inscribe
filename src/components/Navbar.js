import { Link } from 'react-router-dom';

const Navbar = () =>
{
    return (
        <nav className="bg-transparent">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-3xl font-bold tracking-wide text-gray-800 hover:text-gray-900">
                        Inscribe
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-20 font-bold text-gray-700">
                    <li className="cursor-pointer hover:text-gray-900">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-900">
                        <Link to="/create">New Blog</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-900">
                        <Link to="/blogs">Blogs</Link>
                    </li>
                </ul>

                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
