const BlogView = ({ blog}) => {
    return (
        <article
            key={blog.id}
            className="relative flex flex-col h-full transition rounded-lg shadow-lg group"
        >
            <div className="flex flex-col flex-grow p-6 space-y-4">
                <div className="flex items-center text-xs gap-x-4">
                    <time dateTime={blog.datetime} className="text-gray-500">
                        {blog.date}
                    </time>
                    <a
                        href={blog.category.href}
                        className="rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600"
                    >
                        {blog.category}
                    </a>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <a href={blog.href}>
                        <span className="absolute inset-0" />
                        {blog.title}
                    </a>
                </h3>
                <p className="flex-grow mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {blog.description}
                </p>

                <div className="relative flex items-center gap-x-4">
                    <img
                        alt={blog.author.name}
                        src={blog.author.imageUrl}
                        className="w-10 h-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={blog.author.href}>
                                {blog.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{blog.author.role}</p>
                    </div>
                </div>
            </div>

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-0 group-hover:backdrop-blur-sm group-hover:bg-opacity-70">
                <div className="text-center transition duration-300 opacity-0 group-hover:opacity-100 ">
                    <h3 className="text-2xl font-bold text-white">{blog.title}</h3>
                    <p className="mt-2 text-white">{blog.author.name}</p>
                </div>
            </div>
        </article>

    );
};

export default BlogView;
