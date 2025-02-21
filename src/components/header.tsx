"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/logo.webp"
                        alt="Shop Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        Головна
                    </Link>
                    <Link href="/shop" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        Магазин
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        Про нас
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        Контакти
                    </Link>
                </nav>
                <Link href="/cart" className="hidden md:block">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-gray-700 hover:text-indigo-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </motion.div>
                </Link>
                <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.nav
                        className="bg-white w-4/5 max-w-md rounded-lg shadow-lg py-6 px-8 text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="absolute top-4 right-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>
                            ✖
                        </button>
                        <div className="flex flex-col space-y-4 text-lg font-medium">
                            <Link href="/" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                Головна
                            </Link>
                            <Link href="/shop" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                Магазин
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                Про нас
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                Контакти
                            </Link>
                            <Link href="/cart" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                Кошик
                            </Link>
                        </div>
                    </motion.nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
