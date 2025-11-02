export default function StructuredData() {
  const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://inteligencia.pw";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: domainName,
    description: `Premium domain ${domainName} available for acquisition. Perfect for AI startups, intelligence platforms, and data-driven enterprises.`,
    category: "Domain Name",
    brand: {
      "@type": "Brand",
      name: domainName,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "5000-15000",
        priceCurrency: "USD",
      },
    },
    seller: {
      "@type": "Person",
      name: "imrulo.eth",
      email: "imrulo.eth@proton.me",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

