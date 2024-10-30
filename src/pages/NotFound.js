import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen px-4 text-center md:px-16 lg:px-32">
    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
      404
    </h1>
    <p className="max-w-2xl mx-auto mt-8 text-lg font-medium text-gray-500 sm:text-xl">
      Oops! Page not found
    </p>
    <div className="flex items-center justify-center mt-10 gap-x-6">
      <Link
        to="/"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back Home
      </Link>
    </div>
  </div>
);

export default NotFound;
