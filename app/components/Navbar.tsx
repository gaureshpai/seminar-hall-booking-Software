'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
                <div className="flex items-center justify-between h-[12vh]">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={60}
                            height={50}
                            className="p-2 h-[100%] relative left-1"
                        />
                    </Link>

                    <nav className="hidden md:flex space-x-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md transition-colors duration-200 uppercase text-sm'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-3 shadow-md">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md transition-colors duration-200 '
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;