import { Link } from 'react-router-dom';

const Home = () =>
{
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center md:px-16 lg:px-32">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Welcome to Your Story
            </h1>
            <p className="max-w-2xl mx-auto mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                Every story matters. Share your thoughts and discover new perspectives in a community of writers and readers.
                Join us and turn your ideas into engaging narratives.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
                <Link
                    to="/create"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Start Writing
                </Link>
                <Link
                    to="/blogs"
                    className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Discover Stories <span aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
