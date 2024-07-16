import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    const links = [
        {
            name: 'Dashboard',
            link: '/admin'
        },
        {
            name: 'Posts',
            link: '/admin/posts'
        },
        {
            name: 'Categories',
            link: '/admin/categories'
        },
        {
            name: 'Author',
            link: '/admin/authors'
        }
    ];

    return (
        <section className='w-[200px] border-r h-screen p-6'>
            <ul className='w-full flex flex-col gap-6'>
                {links.map((item, index) => (
                    <li key={index} className='flex font-bold gap-3 items-center px-5 py-2'>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Sidebar;
