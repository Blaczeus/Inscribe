import React, { useState, useEffect } from 'react';
import BlogList from "../components/BlogList";



const Home = () =>
{
    const [ blogs, setBlogs ] = useState( [
        {
            id: 1,
            title: 'Boost Your Conversion Rate',
            href: '#',
            description:
                "Enhancing your conversion rate is crucial for growing your business. By understanding your audience's needs and improving user experience, you can effectively turn visitors into customers. Consider implementing A/B testing and optimizing your call-to-action buttons to see significant improvements.",
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 2,
            title: 'The Importance of Consistent Branding',
            href: '#',
            description:
                'Consistent branding helps build trust with your audience. By maintaining a uniform style across all platforms, you reinforce your message and identity. This blog explores methods to ensure cohesive branding while adapting to various channels.',
            date: 'Apr 1, 2020',
            datetime: '2020-04-01',
            category: { title: 'Branding', href: '#' },
            author: {
                name: 'Jane Doe',
                role: 'Marketing Specialist',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 3,
            title: 'Leveraging Social Media for Business Growth',
            href: '#',
            description:
                'In today’s digital age, social media is an indispensable tool for business growth. This article discusses strategies to effectively utilize social media platforms, engage with your audience, and promote your products or services to enhance visibility and sales.',
            date: 'May 10, 2020',
            datetime: '2020-05-10',
            category: { title: 'Social Media', href: '#' },
            author: {
                name: 'Emily Tran',
                role: 'Social Media Manager',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 4,
            title: 'Understanding SEO: A Beginner’s Guide',
            href: '#',
            description:
                'Search Engine Optimization (SEO) is essential for increasing the visibility of your website on search engines. This guide breaks down the basics of SEO, including keyword research, on-page optimization, and link building strategies that can help drive organic traffic to your site.',
            date: 'Jun 25, 2020',
            datetime: '2020-06-25',
            category: { title: 'SEO', href: '#' },
            author: {
                name: 'Tom Smith',
                role: 'SEO Expert',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
    ] );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () =>
    {
        if (blogs)
        {
            const loaded = true;
            setIsLoading(!loaded);
        }
    }, [blogs] )

    const handleDelete = ( id ) =>
    {
        const newBlogs = blogs.filter( blog => blog.id !== id );
        setBlogs( newBlogs );
    }

    return (
        <div>
            {isLoading &&
                <div className="flex self-center justify-center">
                    <h1 className='text-3xl font-bold text-center'>
                        Loading...
                    </h1>
                </div>}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
        </div>
    )
}

export default Home;