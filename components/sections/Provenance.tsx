"use client";

import { motion } from "framer-motion";

export default function Provenance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-luxury-navy mb-6">
            Domain Provenance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Originally registered in the early 2020s, this domain has remained
            privately held — carefully preserved for the right strategic buyer. The
            Spanish/Portuguese root &quot;Inteligencia&quot; (Intelligence) carries
            significant linguistic power and global recognition.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Now exclusively available for acquisition,{" "}
            <span className="font-semibold text-luxury-gold">
              {process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw"}
            </span>{" "}
            represents a rare opportunity to own a premium domain in the rapidly
            expanding AI and intelligence technology sector. The .pw TLD adds a modern,
            tech-forward dimension, making it perfect for innovative platforms and
            startups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

