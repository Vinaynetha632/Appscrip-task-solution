import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "LOGO - mettā muse",
  description: "Shop high-quality products from mettā muse. Discover our artisan-made accessories, bags, and more. A React & Next.js server-side rendered application.",
  keywords: "Mettā muse, ecommerce, products, shop, artisan",
  authors: [{ name: "Appscrip Candidate" }],
  openGraph: {
    title: "LOGO - mettā muse",
    description: "Explore the newest collections and artisan-made accessories at mettā muse.",
    url: "https://mettamuse-demo.netlify.app/",
    siteName: "mettā muse",
    images: [
      {
        url: "https://mettamuse-demo.netlify.app/og-image.jpg", // placeholder
        width: 1200,
        height: 630,
        alt: "mettā muse products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "mettā muse",
              url: "https://mettamuse-demo.netlify.app/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://mettamuse-demo.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
