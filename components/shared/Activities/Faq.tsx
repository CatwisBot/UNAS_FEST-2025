"use client";

import React, { useState } from "react";
import { Activities } from "@/constants/Activities/Activities";

interface FaqItemType {
    question: string;
    answer: string | string[];
}

const FaqItem = ({
    item,
    isOpen,
    onClick,
}: {
    item: FaqItemType;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <div className="bg-gradient-to-r from-[#804FB2] to-[#493CAE] rounded-2xl shadow-lg transition-all duration-300">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left p-5 cursor-pointer"
            >
                <span className="font-semibold text-white">{item.question}</span>
                <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    {Array.isArray(item.answer) ? (
                        <ul className="px-5 pb-5 text-white/90 leading-relaxed list-disc list-inside space-y-2">
                            {item.answer.map((ans, i) => (
                                <li key={i}>{ans}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="px-5 pb-5 text-white/90 leading-relaxed">
                            {item.answer}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Faq = ({ slug }: { slug: string }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Cari activity sesuai slug
    const activity = Activities.find((a) => a.path === slug);

    if (!activity || !activity.faqs || activity.faqs.length === 0) {
        return null;
    }

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative w-full">
            <div className="relative z-10 w-full pt-20 pb-16 px-6 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
                        <span className="bg-gradient-to-r from-[#FBC21C] to-[#EC8C3C] bg-clip-text text-transparent">
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                    </h2>

                    <div className="space-y-5">
                        {activity.faqs.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
