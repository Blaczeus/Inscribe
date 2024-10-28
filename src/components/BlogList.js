

const BlogList = ( { blogs, handleDelete } ) =>
{
    return (
        <div className="py-24 bg-transparent sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogs.map( ( blog ) => (
                        <article key={blog.id} className="flex flex-col items-start justify-between max-w-xl">
                            <div className="flex items-center text-xs gap-x-4">
                                <time dateTime={blog.datetime} className="text-gray-500">
                                    {blog.date}
                                </time>
                                <a
                                    href={blog.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {blog.category.title}
                                </a>
                            </div>
                            <div className="relative group">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={blog.href}>
                                        <span className="absolute inset-0" />
                                        {blog.title}
                                    </a>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{blog.description}</p>
                            </div>
                            <div className="relative flex items-center mt-8 gap-x-4">
                                <img alt="" src={blog.author.imageUrl} className="w-10 h-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={blog.author.href}>
                                            <span className="absolute inset-0" />
                                            {blog.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{blog.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-6">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg font-small hover:bg-red-500"
                                    onClick={() => handleDelete(blog.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </article>
                    ) )}
                </div>
            </div>
        </div>
    )
}

export default BlogList;