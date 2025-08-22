"use client";

import React, { useState } from "react";
import { FaqData, FaqItem as FaqItemType } from "@/constants/Home/Faq";

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
    <div className="bg-white rounded-lg shadow-lg transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-4 sm:p-5 cursor-pointer"
      >
        <span className="font-semibold text-black">{item.question}</span>
        <svg
          className={`w-5 h-5 text-black transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
          ></path>
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4 sm:px-5 pb-4 text-black">
          {Array.isArray(item.answer) ? (
            <ul className="list-disc list-inside space-y-1">
              {item.answer.map((ans, idx) => (
                <li key={idx}>{ans}</li>
              ))}
            </ul>
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-gradient-to-b from-0% from-[#37126B] to-80% to-[#000138] w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] overflow-visible">
      <div className="relative z-10 w-full pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white mb-8 sm:mb-10 md:mb-12">
            FREQUENTLY{" "}
            <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
              ASKED QUESTIONS
            </span>
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 font-medium rounded-xl p-4 sm:p-6">
            {FaqData.map((item, index) => (
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