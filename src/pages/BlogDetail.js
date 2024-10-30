import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const BlogDetail = () =>
{
    const { blogId } = useParams();
    const navigate = useNavigate();

    const savedBlogs = JSON.parse( localStorage.getItem( "blogs" ) ) || [];
    const blog = savedBlogs.find( ( b ) => b.id === parseInt( blogId ) );

    if ( !blog )
    {
        return (
            <ErrorPage
                error={{
                    status: 404,
                    message: "Blog not found",
                    redirect: "/blogs",
                    action: "Go back to Blogs",
                }}
            />
        );
    }

    const handleDelete = ( id ) =>
    {
        const updatedBlogs = savedBlogs.filter( ( b ) => b.id !== id );
        localStorage.setItem( "blogs", JSON.stringify( updatedBlogs ) );
        navigate( "/blogs" );
    };

    const handleGoBack = () =>
    {
        navigate( -1 );
    };

    return (
        <div className="flex justify-center min-h-screen px-6 py-12 bg-transparent">
            <article className="w-full max-w-4xl p-10 rounded-lg shadow-lg">
                <div className="flex items-start justify-between mb-6">
                    <h1 className="flex-1 ml-4 text-4xl font-extrabold text-gray-900 break-words">
                        {blog.title}
                    </h1>
                    <button
                        onClick={handleGoBack}
                        className="flex items-center justify-center w-10 p-2 text-4xl text-blue-600 transition duration-300 ease-in-out bg-transparent border border-transparent rounded-md shadow-md h-9 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        aria-label="Go Back"
                    >
                        ←
                    </button>

                </div>

                <p className="mb-4 text-sm text-gray-500">Published on: {blog.date}</p>

                <div className="mt-6">
                    <p className="text-lg leading-relaxed text-gray-700">{blog.description}</p>
                </div>

                <div className="flex items-center mt-10 space-x-4">
                    <button
                        type="button"
                        className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500"
                        onClick={() => handleDelete( blog.id )}
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        Update
                    </button>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;
