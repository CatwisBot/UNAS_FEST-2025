import React from "react";
import Contact from "@/components/ui/ContactCard";

export default function Join() {
    return (
        <main className="bg-gradient-to-b from-[#0A0B31] to-[#000138] py-20 sm:py-30">
            <div id="Partner" className="flex flex-col items-center text-center justify-center py-10 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
                <h2 className="uppercase font-extrabold text-2xl sm:text-4xl mb-2 sm:mb-5">join with us?</h2>
                <p className="text-base sm:text-xl px-2">Whether you're looking to sponsor, collaborate, or provide media partner,<br />we'd love to explore how we can create value together.</p>
            </div>
            <div className="flex flex-row items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
                <Contact />
            </div>
        </main>
    )
}