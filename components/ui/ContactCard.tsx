"use client";
import { FaWhatsapp } from "react-icons/fa";
import { contactsData } from "@/constants/Partnership/Contact";
import Link from "next/link";

export default function GlassCard() {
    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
                {contactsData.map((contact) => (
                    <Link
                        href={contact.whatsApp}
                        key={contact.index}
                        className="flex flex-col items-center justify-center shine-container-contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="shine-overlay-contact"></div>
                        <div className="bg-white/10 shadow-xl p-8 text-center w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px]">
                            <div className="flex justify-center mb-4">
                                <div className="bg-gradient-to-br from-[#914EF2] to-[#6156EE] p-4 rounded-xl shadow-md">
                                    <FaWhatsapp className="text-white text-xl sm:text-3xl" />
                                </div>
                            </div>
                            <h2 className="text-base sm:text-xl font-semibold text-white mb-2">
                                WhatsApp {contact.title}
                            </h2>
                            <p className="text-white font-medium text-xs sm:text-sm mb-4">
                                Get in touch via WhatsApp for detailed discussions
                            </p>
                            <p className="text-base sm:text-xl font-semibold text-white">{contact.no}</p>
                            <p className="text-white font-medium text-xs sm:text-sm">({contact.name})</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
