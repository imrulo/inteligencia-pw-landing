"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why is this domain valuable?",
    answer:
      "Inteligencia.pw combines a powerful, globally recognized word (Intelligence) with premium positioning. It's perfect for AI startups, intelligence platforms, and data-driven businesses. The domain offers instant brand authority, SEO advantages, and memorability that generic domains can't match. Comparable sales in the intelligence domain space have reached $8,000-$15,000+.",
  },
  {
    question: "Who benefits most from owning it?",
    answer:
      "This domain is ideal for AI startups, business intelligence platforms, data analytics companies, SaaS providers, venture capital firms, consulting services, and educational platforms focused on AI and intelligence. Any business that wants to establish immediate credibility and authority in the intelligence/AI space would benefit significantly.",
  },
  {
    question: "How do I make an offer?",
    answer:
      "You can contact us via WhatsApp (https://wa.link/6difl3) for immediate response, or email us at imrulo.eth@proton.me with your offer and any questions. We're open to serious inquiries and will respond promptly to discuss pricing, terms, and the acquisition process.",
  },
  {
    question: "How is ownership transferred securely?",
    answer:
      "We use Escrow.com, the industry-leading escrow service trusted by domain buyers and sellers worldwide. The process is simple: (1) You submit payment to Escrow.com, (2) We initiate domain transfer, (3) You verify ownership at your registrar, (4) Escrow.com releases payment. This ensures both parties are protected throughout the transaction.",
  },
  {
    question: "What happens after purchase?",
    answer:
      "After payment confirmation via Escrow.com, we'll initiate the domain transfer to your registrar. The transfer typically completes within 5-7 business days. You'll receive full ownership and control, including domain management, DNS settings, and all associated rights. We'll provide any necessary documentation for the transfer.",
  },
  {
    question: "Is this a one-time opportunity?",
    answer:
      "Premium domains like Inteligencia.pw are rare assets. Once acquired, this opportunity is gone. The intelligence and AI market is rapidly growing, making this domain increasingly valuable over time. We're actively engaging with multiple interested parties, so early action is recommended.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-luxury-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about acquiring this premium domain
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-luxury-ivory rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-luxury-navy pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-luxury-gold transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

