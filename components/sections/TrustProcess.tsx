"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "1",
    title: "Make an Offer",
    description: "Contact via WhatsApp or email with your offer and requirements.",
  },
  {
    step: "2",
    title: "Secure Escrow",
    description:
      "We use Escrow.com for secure payment and ownership transfer protection.",
  },
  {
    step: "3",
    title: "Domain Transfer",
    description:
      "Once payment is secured, we initiate the domain transfer process to your registrar.",
  },
  {
    step: "4",
    title: "Ownership Confirmed",
    description:
      "You receive full ownership and control of the domain within 5-7 business days.",
  },
];

export default function TrustProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-luxury-ivory to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-luxury-navy mb-6">
            Secure Acquisition Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We ensure a transparent, secure transaction using industry-standard
            escrow services.
          </p>
        </motion.div>

        {/* Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-luxury-navy mb-2">
              Escrow.com Protected
            </h3>
            <p className="text-gray-600">
              Secure payment and ownership transfer with industry-leading escrow
              services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-luxury-navy mb-2">
              Fast Transfer
            </h3>
            <p className="text-gray-600">
              Domain transfer completed within 5-7 business days after payment
              confirmation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-luxury-navy mb-2">
              Transparent Process
            </h3>
            <p className="text-gray-600">
              Clear communication and documentation throughout the entire
              acquisition process.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-luxury-navy text-white rounded-xl p-6 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center font-bold text-xl text-luxury-navy">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-luxury-gold mt-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial & Bundle Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
        >
          <div className="mb-6">
            <p className="text-lg text-gray-700 italic mb-4">
              &quot;Flawless acquisition experience — fast, secure, transparent. The
              escrow process gave us complete confidence throughout.&quot;
            </p>
            <p className="text-sm text-gray-500">— Previous Domain Buyer</p>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <p className="text-lg font-semibold text-luxury-navy mb-2">
              💼 Portfolio Offer
            </p>
            <p className="text-gray-600">
              Interested in multiple domains? Ask about bundle pricing and
              exclusive portfolio opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

