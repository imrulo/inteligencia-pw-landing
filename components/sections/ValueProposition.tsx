"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Brand Authority",
    description: "Instant trust & credibility in the AI and intelligence space",
    icon: "🏆",
  },
  {
    title: "SEO Advantage",
    description: "Strong organic potential with keyword-rich, memorable domain",
    icon: "📈",
  },
  {
    title: "Market Versatility",
    description: "Cross-industry value — AI, data analytics, business intelligence",
    icon: "🌐",
  },
  {
    title: "Appreciation",
    description: "Long-term digital asset growth as the intelligence market expands",
    icon: "💎",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-ivory">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-luxury-navy mb-6">
            Why {process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw"} Matters
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This premium domain represents more than a URL — it&apos;s a strategic
            asset that positions your brand at the forefront of the intelligence and AI
            revolution. With exceptional memorability, linguistic power, and market
            relevance, it offers unparalleled investment potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

