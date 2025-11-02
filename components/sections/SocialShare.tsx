"use client";

import { motion } from "framer-motion";

const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://inteligencia.pw";

const shareText = `Check out this premium domain opportunity: ${domainName} - Perfect for AI startups and intelligence platforms!`;
const shareUrl = baseUrl;

export default function SocialShare() {
  const handleShare = (platform: "twitter" | "linkedin") => {
    let url = "";
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`;
    }
    if (url) {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-ivory border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-luxury-navy mb-4">
            Share This Opportunity
          </h2>
          <p className="text-gray-600 mb-8">
            Know someone who might be interested? Share this premium domain
            opportunity.
          </p>

          {/* OG Preview Card */}
          <div className="bg-luxury-navy rounded-lg p-6 mb-8 text-left border-2 border-luxury-gold">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-luxury-gold rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-luxury-navy">IP</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-2 truncate">
                  Acquire {domainName}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  Premium Intelligence Domain for AI startups, intelligence
                  platforms, and data-driven enterprises.
                </p>
                <p className="text-luxury-gold text-xs mt-2">{shareUrl}</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center justify-center gap-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X (Twitter)
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="flex items-center justify-center gap-3 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

