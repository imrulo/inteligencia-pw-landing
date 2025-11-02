import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-ivory px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-luxury-navy mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-luxury-navy mb-6">
          Domain Opportunity Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          This page doesn&apos;t exist, but{" "}
          <span className="font-semibold text-luxury-gold">
            Inteligencia.pw
          </span>{" "}
          is still available for acquisition.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-navy font-semibold rounded-lg transition-colors duration-200"
        >
          Return to Domain Listing
        </Link>
      </div>
    </div>
  );
}

