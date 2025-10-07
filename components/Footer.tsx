// import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si'
// import Image from 'next/image'
// import Link from 'next/link'

// const Footer = () => {
//   return (
//     <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-green-600 p-8 rounded-lg'>
//         <div className="">
//             <Link href='/' className='flex items-center md:items-start gap-2'>
//                 <Image src="/logo.jpg" alt="abuja detty december" width={48} height={48} className='w-6 h-6 md:w-16 md:h-16' />
//                 {/* <p className="hidden md:block text-md font medium tracking-wider text-white">Abuja Detty December</p> */}
//             </Link>
//             <p className='text-sm text-white'>2025 Abuja Detty December</p>
//             <p className='text-sm text-white'>All rights reserved</p>
//         </div>
//         <div className="flex flex-col gap-4 text-sm text-white items-center md:items-start">
//             <p className='text-base text-amber-50'>Events & Tickets</p>
//             <Link href='/'>All Events</Link>
//             <Link href='/'>My Tickets</Link>
//             <Link href='/'>Event Calender</Link>
//             <Link href='/'>Venues</Link>
//         </div>
//         <div className="flex flex-col gap-4 text-sm text-white items-center md:items-start">
//             <p className='text-base text-amber-50'>Contests</p>
//             <Link href='/'>Vote Now</Link>
//             <Link href='/'>All Contests</Link>
//             <Link href='/'>LeaderBoard</Link>
//             <Link href='/'>Raffle</Link>
//         </div>
//         <div className="flex flex-col gap-4 text-sm text-white items-center md:items-start">
//             <p className='text-base text-amber-50'>Business</p>
//             <Link href='/'>Sponsorship</Link>
//             <Link href='/'>Affiliate Program</Link>
//             <Link href='/'>Vendor Portal</Link>
//             <Link href='/'>Market Place</Link>
//             <Link href='/'>Media Kit</Link>
//         </div>
//          <div className="flex flex-col gap-4 text-sm text-white items-center md:items-start">
//             <p className='text-base text-amber-50'>Support & Legal</p>
//             <Link href='/'>Help Center</Link>
//             <Link href='/'>Contact Us</Link>
//             <Link href='/'>FAQ</Link>
//             <Link href='/'>News & Update</Link>
//         </div>
//          <div className="flex flex-col gap-4 text-sm text-white items-center md:items-start">
//             <p className='text-base text-amber-50'>Legal Links</p>
//             <Link href='/'>Terms of Service</Link>
//             <Link href='/'>Privacy Policy</Link>
//             <Link href='/'>Refund Policy</Link>
//             <Link href='/'>cookie Policy</Link>
//         </div>
//         <div className="flex gap-4 text-white outline-0 text-lg">
//             <Link href="https://www.instagram.com/abujadettydecember/">
//                 <SiInstagram />
//             </Link>
//             <Link href="https://web.facebook.com/abujadettydecembr">
//                 <SiFacebook />
//             </Link>
//             <Link href="https://x.com/abujadettydec">
//                 <SiX />
//             </Link>
//             <Link href="https://www.youtube.com/@AbujaDettyDecember/">
//                 <SiYoutube />
//             </Link>
//         </div>

//     </div>
//   )
// }

// export default Footer


'use client';

import { useState } from 'react';
import Image from "next/image"
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Heart
} from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email) return;

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, action: 'subscribe' }),
            });

            if (response.ok) {
                setSubscribed(true);
                setEmail('');
                setTimeout(() => setSubscribed(false), 3000);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
        }
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        events: [
            { name: 'All Events', href: '/events' },
            { name: 'Concert Series', href: '/events?category=concerts' },
            { name: 'Cultural Shows', href: '/events?category=cultural' },
            { name: 'Dance Battles', href: '/events?category=dance' },
            { name: 'Food Festival', href: '/events?category=food' },
            { name: 'Art Exhibitions', href: '/events?category=art' },
        ],
        participate: [
            { name: 'Miss ADD', href: '/contests/miss-add' },
            { name: 'Carol Competition', href: '/contests/carol' },
            { name: 'Dance Challenge', href: '/contests/dance' },
            { name: 'Photography Contest', href: '/contests/photography' },
            { name: 'Fashion Show', href: '/contests/fashion' },
            { name: 'Talent Hunt', href: '/contests/talent' },
        ],
        support: [
            { name: 'Contact Us', href: '/support/contact' },
            { name: 'FAQ', href: '/support/faq' },
            { name: 'Ticket Support', href: '/support/tickets' },
            { name: 'Technical Help', href: '/support/technical' },
            { name: 'Accessibility', href: '/support/accessibility' },
            { name: 'Report Issue', href: '/support/report' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/legal/privacy' },
            { name: 'Terms of Service', href: '/legal/terms' },
            { name: 'Refund Policy', href: '/legal/refund' },
            { name: 'Code of Conduct', href: '/legal/conduct' },
            { name: 'Cookie Policy', href: '/legal/cookies' },
            { name: 'GDPR', href: '/legal/gdpr' },
        ],
    };

    const socialLinks = [
        { name: 'Facebook', icon: SiFacebook, href: 'https://facebook.com/abujadetty', color: 'hover:text-blue-600' },
        { name: 'Instagram', icon: SiInstagram, href: 'https://instagram.com/abujadetty', color: 'hover:text-pink-600' },
        { name: 'Twitter', icon: SiX, href: 'https://twitter.com/abujadetty', color: 'hover:text-blue-400' },
        { name: 'YouTube', icon: SiYoutube, href: 'https://youtube.com/@abujadetty', color: 'hover:text-red-600' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="font-playfair font-bold text-2xl md:text-3xl mb-4">
                            Stay Updated with ADD 2025
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Get the latest news, exclusive offers, and behind-the-scenes content
                            delivered straight to your inbox.
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
                            <button
                                type="submit"
                                disabled={subscribed}
                                className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 disabled:opacity-50 inline-flex items-center gap-2"
                            >
                                {subscribed ? (
                                    <>
                                        <Heart className="fill-current" size={18} />
                                        Subscribed!
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                                {/* <span className="text-white font-bold text-lg"></span> */}
                                <Image
                                    src="/logo.jpg"
                                    alt="abuja detty december"
                                    width={48}
                                    height={48}
                                    className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                />
                            </div>
                            <div>
                                <div className="font-playfair font-bold text-xl">
                                    Abuja Detty December
                                </div>
                                <div className="text-gray-400 text-sm">Nigeria&#39;s Biggest December Festival</div>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Celebrating Nigerian culture, music, and entertainment with
                            unforgettable experiences in the heart of Abuja.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-primary-500 flex-shrink-0" />
                                <a href="mailto:info@abujadettydecember.com" className="text-gray-300 hover:text-white">
                                    info@abujadettydecember.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-primary-500 flex-shrink-0" />
                                <a href="tel:+2348012345678" className="text-gray-300 hover:text-white">
                                    +234 801 234 5678
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-300">
                                    Abuja, FCT, Nigeria
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Events Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Events</h4>
                        <ul className="space-y-3">
                            {footerLinks.events.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Participate Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Participate</h4>
                        <ul className="space-y-3">
                            {footerLinks.participate.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Abuja Detty December. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Built with ❤️ in Nigeria for the world
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-400 ${social.color} transition-colors duration-200`}
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Additional Info */}
                        <div className="text-center lg:text-right">
                            <div className="text-xs text-gray-500 space-y-1">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200 z-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Back to top"
            >
                <ArrowRight size={20} className="rotate-[-90deg]" />
            </button>
        </footer>
    );
}