import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () =>
{
    const [ blog, setBlog ] = useState( {
        title: '',
        description: '',
        category: '',
        authorName: '',
        authorRole: '',
    } );

    const navigate = useNavigate();

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setBlog( (prevBlog) => ({ ...prevBlog, [ name ]: value }) );
    };

    const formatTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12 || 12;
    
        return `${hours}:${minutes}:${seconds} ${amPm}`;
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        if (blog) {
            const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
            const newBlog = {
                id: Date.now(),
                title: blog.title,
                description: blog.description,
                date: new Date().toLocaleDateString(),
                time: formatTime(),
                category: blog.category,
                author: {
                    name: blog.authorName,
                    role: blog.authorRole,
                    imageUrl:
                        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            };
            savedBlogs.push(newBlog);
            localStorage.setItem("blogs", JSON.stringify(savedBlogs));
            setBlog({
                title: '',
                description: '',
                category: '',
                authorName: '',
                authorRole: '',
            });
            alert("Blog created successfully!");
            navigate('/blogs');
        }
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
