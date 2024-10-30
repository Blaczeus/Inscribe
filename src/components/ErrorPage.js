import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = ( { error = {} } ) =>
{
  const navigate = useNavigate();

  const {
    status = 'Unknown Error',
    message = 'Something went wrong',
    redirect = '/',
    action = 'Go Home'
  } = error;

  const handleGoBack = () =>
  {
    navigate( -1 );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center md:px-16 lg:px-32">
      <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl" aria-live="assertive">
        {status}
      </h1>
      <p className="max-w-2xl mx-auto mt-8 text-lg font-medium text-gray-500 sm:text-xl">
        {message}
      </p>
      <div className="mt-6">
        <button
          onClick={handleGoBack}
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Go Back
        </button>
        <Link to={redirect} className="px-4 py-2 ml-4 text-sm text-white bg-green-600 rounded-lg hover:bg-green-500">
          {action}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
