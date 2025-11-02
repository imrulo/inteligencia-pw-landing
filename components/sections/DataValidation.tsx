"use client";

import { motion } from "framer-motion";

const comparableSales = [
  { domain: "Intelligence.io", price: "$15,000", year: "2023" },
  { domain: "DataIntelligence.com", price: "$12,500", year: "2022" },
  { domain: "AIIntelligence.net", price: "$8,900", year: "2023" },
];

export default function DataValidation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-luxury-navy to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Market Data & Validation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry research and comparable sales demonstrate significant value
            potential for premium intelligence domains.
          </p>
        </motion.div>

        {/* Estimated Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-2xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">
            Estimated Market Value Range
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
            $5,000 – $15,000+
          </p>
          <p className="text-gray-300">
            Comparable sales suggest strong appreciation potential for premium
            intelligence domains
          </p>
        </motion.div>

        {/* Keyword Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-luxury-gold mb-2">
              12K+
            </div>
            <div className="text-gray-300">Monthly Search Volume</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-luxury-gold mb-2">$8.50</div>
            <div className="text-gray-300">Average CPC</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-luxury-gold mb-2">High</div>
            <div className="text-gray-300">Competition Level</div>
          </div>
        </motion.div>

        {/* Comparable Sales Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Comparable Premium Domain Sales
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 text-luxury-gold font-semibold">Domain</th>
                  <th className="pb-4 text-luxury-gold font-semibold">Sale Price</th>
                  <th className="pb-4 text-luxury-gold font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                {comparableSales.map((sale, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 font-medium">{sale.domain}</td>
                    <td className="py-4 text-luxury-gold font-semibold">
                      {sale.price}
                    </td>
                    <td className="py-4 text-gray-300">{sale.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

