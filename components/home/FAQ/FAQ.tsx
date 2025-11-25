"use client";

import { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  showSearch?: boolean;
  showLoadMore?: boolean;
  initialDisplayCount?: number;
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  searchClassName?: string;
  faqItemClassName?: string;
  loadMoreClassName?: string;
}

export const FAQ = ({
  title = "Frequently Asked Questions (FAQs)",
  description = "Find answers to common questions about our products, orders, and more. For further help, feel free to contact us",
  faqs = [
    {
      id: "1",
      question: "Where is Passion Farms located?",
      answer: `Passion Farms operates across three key states in the United States, each with a specific portfolio focus:

• Texas (THCA Portfolio + Distribution)
Houston, Texas, USA

• California (THC Portfolio + Cultivation)
Los Angeles, California, USA

• Oklahoma (THC Portfolio + Cultivation)
Oklahoma City, Oklahoma, USA

We are growing responsibly in each state according to local laws and regulations.`,
    },
    {
      id: "2",
      question: "What makes Passion Farms different from other cannabis brands?",
      answer: "Our commitment to quality, sustainable practices, and compliance with all state regulations sets us apart.",
    },
    {
      id: "3",
      question: "Is Passion Farms licensed and legal?",
      answer: "Yes, we operate under full compliance with state regulations in all our locations.",
    },
    {
      id: "4",
      question: "What is THCA and how is it different from THC?",
      answer: "THCA is the precursor to THC and converts to THC when heated through smoking or vaping.",
    },
    {
      id: "5",
      question: "How can I partner with Passion Farms as a buyer or distributor?",
      answer: "Please contact our business development team through our contact page for partnership inquiries.",
    },
    {
      id: "6",
      question: "What type of cannabis products do you offer?",
      answer: "We offer a variety of premium cannabis products including flower, concentrates, and more.",
    },
  ],
  showSearch = true,
  showLoadMore = true,
  initialDisplayCount = 6,
  sectionClassName = "w-full bg-white py-6 lg:py-6",
  containerClassName = "max-w-[1138px] mx-auto px-4 sm:px-6 lg:px-8",
  titleClassName = "text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 text-center tracking-[-0.02em]",
  descriptionClassName = "text-[#1D1D1D] text-base font-normal leading-9 text-center tracking-[-0.02em] mt-3 max-w-[822px] mx-auto",
  searchClassName = "w-full max-w-[907px] mx-auto mt-8 mb-12",
  faqItemClassName = "w-full bg-white border border-[#BBBBBB] rounded-[10px] mb-4",
  loadMoreClassName = "flex justify-center mt-8",
}: FAQProps) => {
  const [expandedId, setExpandedId] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedFAQs = filteredFAQs.slice(0, displayCount);

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        {/* Header */}
        <h2
          className={titleClassName}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {title}
        </h2>
        <p
          className={descriptionClassName}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {description}
        </p>

        {/* Search Box */}
        {showSearch && (
          <div className={searchClassName}>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-6 h-6 text-[#878787]" strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[54px] bg-[#F5F5F5] rounded-[42px] pl-14 pr-6 text-base text-[#1D1D1D] placeholder:text-[#878787] focus:outline-none focus:ring-2 focus:ring-[#F0BA43] tracking-[-0.02em]"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div key={faq.id} className={faqItemClassName}>
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 lg:px-8 lg:py-5 text-left"
                >
                  <h3
                    className="text-[#1D1D1D] text-base font-medium leading-9 tracking-[-0.02em] pr-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-[#000000]" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4 text-[#0F0F0F]" strokeWidth={2} />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isExpanded && (
                  <>
                    <div className="border-t border-[#BBBBBB]" />
                    <div className="p-5 lg:px-8 lg:py-6">
                      <p
                        className="text-[#1D1D1D] text-base font-normal leading-9 tracking-[-0.02em] whitespace-pre-line"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {showLoadMore && displayCount < filteredFAQs.length && (
          <div className={loadMoreClassName}>
            <button
              onClick={() => setDisplayCount(displayCount + initialDisplayCount)}
              className="px-6 h-9 bg-[#F2F2F2] rounded-[30px] text-[#1D1D1D] text-base font-normal leading-9 text-center tracking-[-0.02em] hover:bg-[#E5E5E5] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
