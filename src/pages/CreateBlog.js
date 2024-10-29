import React, { useState } from 'react';

const CreateBlog = () =>
{
    const [ blog, setBlog ] = useState( {
        title: '',
        description: '',
        category: '',
        authorName: '',
        authorRole: '',
        date: '',
    } );

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setBlog( { ...blog, [ name ]: value } );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        console.log( blog );
        // You can handle form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
            >
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                    Create New Blog
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Blog Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={blog.title}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={blog.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        value={blog.category}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a category</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Branding">Branding</option>
                        <option value="Social Media">Social Media</option>
                        <option value="SEO">SEO</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="authorName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author Name
                    </label>
                    <input
                        type="text"
                        name="authorName"
                        id="authorName"
                        value={blog.authorName}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="authorRole"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author Role
                    </label>
                    <input
                        type="text"
                        name="authorRole"
                        id="authorRole"
                        value={blog.authorRole}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
