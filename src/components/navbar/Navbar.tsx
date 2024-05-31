import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const navbarItems = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'GitHub', href: 'https://github.com/your-repo' },
    { name: 'Contact', href: '/contact' },
    { name: 'Report Bug', href: '/report' },


];

const Navbar = () => {
    return (
        <header className="bg-tranparent py-2  shadow text-white">
            <div className="container mx-auto  px-4 py-2 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        Taskit
                    </Link>
                </div>
                <nav className="space-x-4 hidden md:flex " >
                    {navbarItems.map((item, index) => (
                        <Link className="transition-all ease-in-out duration-500 hover:text-gray-900" key={index} href={item.href}>
                            {item.name}
                        </Link>
                    ))}

                </nav>

                <ul className='space-x-4'>
                    <Link className="text-gray-700 hover:text-gray-900" href="/login">
                        <Button >

                            Login/Register
                        </Button>
                    </Link>

                </ul>
            </div>
        </header >
    );
};

export default Navbar;
