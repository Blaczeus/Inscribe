import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogView from "../components/BlogView";

const Blogs = () =>
{
    const [ blogs, setBlogs ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () =>
    {
        const savedBlogs = JSON.parse( localStorage.getItem( "blogs" ) ) || [];
        setBlogs( savedBlogs );
        setIsLoading( false );
    }, [] )

    return (
        <div className="min-h-screen py-16 overflow-y-auto bg-transparent sm:py-20">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>

                <div>
                    {isLoading ? (
                        <div className="flex self-center justify-center">
                            <h1 className="text-3xl font-bold text-center">
                                Loading...
                            </h1>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="flex items-center justify-center h-96">
                            <p className="text-2xl font-medium text-gray-500">
                                📝 No blogs available. Create your first blog now!
                            </p>
                        </div>
                    ) : (
                        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {blogs.map( ( blog ) => (
                                <Link
                                    key={blog.id}
                                    to={{
                                        pathname: `/blogs/${ blog.id }`,
                                    }}
                                >
                                    <BlogView blog={blog} />
                                </Link>
                            ) )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Blogs;