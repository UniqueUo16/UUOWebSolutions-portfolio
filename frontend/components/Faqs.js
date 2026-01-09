"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What technologies do you work with?",
      a: "I mainly work with React, Next.js, Node.js, FastAPI (Python), and MongoDB. I also use Tailwind CSS for styling and deploy projects on platforms like Render and Vercel.",
    },
    {
      q: "Can you handle both frontend and backend?",
      a: "Yes! I enjoy working across the full stack — building clean, responsive UIs on the frontend and powerful APIs on the backend that tie everything together.",
    },
    {
      q: "Do you build or use APIs?",
      a: "Definitely. I’ve built and integrated REST APIs, handled authentication, and connected apps to services like email systems and databases.",
    },
    {
      q: "Are your projects optimized and fast?",
      a: "Performance is always a priority for me. I write clean, efficient code and focus on quick load times and smooth user experiences.",
    },
    {
      q: "How do you usually solve coding challenges?",
      a: "I take a logical approach — break the problem down, understand the root cause, and build a clean, scalable fix.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{ fontVariant: "small-caps" }}
      >
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl bg-white shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition"
            >
              <span>{item.q}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
