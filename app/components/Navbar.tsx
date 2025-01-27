'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
                <div className="flex items-center justify-between h-[12vh]">
                    <Link href="/">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            width={75}
                            height={75}
                            className='mx-auto p-2 relative left-1'
                        />
                    </Link>
                    <div className='flex space-x-4'>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md transition-colors duration-200 ${window.location.pathname === item.href ? 'text-blue-500 font-bold' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;