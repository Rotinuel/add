"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { Bell, ShoppingCart, User, Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Gallery", href: "/gallery" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Buy Merch", href: "/buymerch" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ cartCount = 0 }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow when scrolling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 shadow-md bg-white`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between px-4 md:px-8 py-3 h-16">
                    {/* LEFT */}
                    <div className="flex items-center space-x-2 gap-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="abuja detty december"
                                width={56}
                                height={56}
                                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex space-x-4 items-center text-black font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-[#488d17] transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4 text-gray-700 hover:text-[#488d17] transition-colors">
                        <div className="hidden sm:block">
                            <SearchBar />
                        </div>
                        <Link href="/account" className="p-2 text-gray-700 hover:text-[#488d17] transition-colors">
                            <User className="cursor-pointer hover:text-gray-200" />
                        </Link>
                        <Bell className="cursor-pointer hover:text-gray-200" />
                        <Link href="/tickets" className="relative p-2 text-gray-700 hover:text-[#488d17] transition-colors">
                            <ShoppingCart className="cursor-pointer hover:text-gray-200" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#ff0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/login"
                            className="hidden md:inline-block ml-2 border text-white bg-[#488d17] border-white/40 px-3 py-1 rounded-md hover:bg-white hover:text-green-700 transition"
                        >
                            Sign in
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden text-gray-700 hover:text-[#488d17] focus:outline-none"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="lg:hidden bg-white backdrop-blur-md border-t border-gray-200 text-black px-6 py-4 space-y-4 animate-slide-down">
                    {navItems.map((item) => (
                        <div key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                                className="block hover:text-[#488d17] transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                    <div className="pt-2 border-t border-green-600">
                        <Link
                            href="/login"
                            onClick={() => setMenuOpen(false)}
                            className="block text-center border border-green/40 px-3 py-2 rounded-md hover:bg-[#488d17] hover:text-white transition"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            )}

        </nav>
    );
};


