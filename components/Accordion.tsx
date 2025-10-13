'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type AccordionItemType = {
    question: string;
    answer: string;
};

interface AccordionItemProps {
    item: AccordionItemType;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-4 text-left focus:outline-none text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
                <span>{item.question}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: AccordionItemType[] = [
        {
            question: "What is Abuja Detty December 2025?",
            answer: "Abuja Detty December is Nigeria's biggest December celebration featuring music concerts, cultural shows, dance competitions, contests, and a vibrant marketplace. It's a month-long festival celebrating Nigerian culture, music, and entertainment.."
        },
        {
            question: "How do I purchase tickets for events?",
            answer: "You can purchase tickets directly through our website by visiting the Events page, selecting your preferred event, choosing your ticket tier (VIP, Premium, or Regular), and completing payment via Paystack or bank transfer."
        },
        {
            question: "Can I vote for contestants if I'm outside Nigeria?",
            answer: "Yes! Our voting system is open to everyone worldwide. You can vote for your favorite contestants in Miss ADD, Carol Competition, and other contests through our secure online voting platform."
        },
        {
            question: "Are there bundles or discount packages available?",
            answer: "Yes, we offer special ticket bundles for multiple events, including Diaspora packages for international supporters and In-Country packages for local attendees. Bundle prices include exclusive perks and discounted rates."
        },
        {
            question: "How does the affiliate program work?",
            answer: "Join our affiliate program to earn 5% commission on every ticket or product sold through your unique referral link. Share your code with friends and family to earn money while promoting the biggest December celebration!"
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-8">Got questions? We&apos;ve got answers!</p>
            <div className="space-y-4">
                {faqs.map((item, idx) => (
                    <AccordionItem
                        key={idx}
                        item={item}
                        isOpen={openIndex === idx}
                        onClick={() => handleToggle(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Accordion;
