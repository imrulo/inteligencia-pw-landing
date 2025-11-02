"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    industry: "AI Startup",
    application:
      "Build instant authority and visibility in the competitive AI space. Perfect for machine learning platforms, AI consulting, and intelligent automation solutions.",
    benefit: "Instant brand recognition and trust in the AI ecosystem",
  },
  {
    industry: "Business Intelligence",
    application:
      "Anchor your digital presence with a name that conveys expertise and analytical depth. Ideal for BI platforms, data analytics tools, and enterprise intelligence software.",
    benefit: "Position as a leader in data-driven decision making",
  },
  {
    industry: "SaaS Platform",
    application:
      "Dominate your niche with a memorable, keyword-rich domain. Excellent for SaaS products focused on intelligence gathering, market analysis, or predictive analytics.",
    benefit: "SEO advantage and premium brand positioning",
  },
  {
    industry: "Venture Capital / Investment",
    application:
      "Establish credibility for intelligence-focused investment funds, research firms, or advisory services targeting the AI and data economy.",
    benefit: "Professional branding that attracts high-value clients",
  },
  {
    industry: "Educational Platform",
    application:
      "Create authoritative learning platforms for AI, data science, or intelligence training programs with a domain that communicates expertise.",
    benefit: "Trust-building domain that enhances course credibility",
  },
  {
    industry: "Consulting Services",
    application:
      "Elevate your consulting brand in AI strategy, business intelligence, or data transformation with a premium domain that reflects sophistication.",
    benefit: "Premium positioning that justifies higher rates",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-luxury-navy mb-6">
            Strategic Use Cases
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This premium domain adapts to multiple industries and business models,
            offering exceptional versatility and investment potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-luxury-navy to-slate-800 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">
                {useCase.industry}
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                {useCase.application}
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-luxury-gold font-semibold">Key Benefit:</p>
                <p className="text-gray-200">{useCase.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

