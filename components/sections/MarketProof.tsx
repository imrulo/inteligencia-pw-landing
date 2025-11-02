"use client";

import { motion } from "framer-motion";

const platforms = ["NameBio", "Afternic", "Sedo"];

export default function MarketProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            As Seen On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {platforms.map((platform) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-gray-700 opacity-60 hover:opacity-100 transition-opacity"
              >
                {platform}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Comparable sales featured on leading domain marketplaces
          </p>
        </motion.div>
      </div>
    </section>
  );
}

