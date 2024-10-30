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
    }, [ blogs ] )

    // const handleDelete = ( id ) =>
    // {
    //     const newBlogs = blogs.filter( blog => blog.id !== id );
    //     setBlogs( newBlogs );
    // localStorage.setItem('blogs', JSON.stringify(newBlogs));
    // }

    return (
        <div className="py-16 bg-transparent sm:py-20">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                {isLoading ? (
                    <div className="flex self-center justify-center">
                        <h1 className='text-3xl font-bold text-center'>
                            Loading...
                        </h1>
                    </div>
                ) : blogs.length === 0 ? (
                    <p>No blogs available.</p>
                ) : (
                    <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {blogs.map( ( blog ) => (
                            <Link
                                to={{
                                    pathname: `/blogs/${ blog.id }`,
                                    state: { blog }
                                }}
                            >
                                <BlogView blog={blog} />
                            </Link> )
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blogs;