import type React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h6 className="text-white text-lg font-semibold mb-4">About Us</h6>
                        <p className="text-sm">
                            Welcome to our Seminar Hall Booking System. We simplify the process of reserving spaces for your events,
                            meetings, and gatherings. Our platform ensures a seamless experience for students and faculty alike.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-white text-lg font-semibold mb-4">Navigation Links</h6>
                        <ul className="space-y-1  ">
                            <li>
                                <Link href="/" className="hover:text-yellow-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-yellow-400 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-yellow-400 transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white text-lg font-semibold mb-4">Admin Panel</h6>
                        <p className="text-sm mb-4">Admins can manage bookings and system settings through the panel.</p>
                        <Link href = "/admin">
                        <button
                            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
                        >
                            Admin Login
                        </button></Link>
                        
                    </div>
                </div>
                <div className="border-t border-gray-800 my-8"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                        Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with ❤️ by Developers of Team Enigma
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            <FaFacebook size={20} />
                        </Link>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            <FaTwitter size={20} />
                        </Link>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </Link>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;