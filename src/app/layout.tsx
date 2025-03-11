import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://prabinacharya1.com.np"),
  openGraph: {
    siteName: "Portfolio | Prabin Acharya",
    type: "website",
    locale: "en_US",
    title: "Fullstack Web Developer | Prabin Acharya",
    description: "Explore my fullstack web development portfolio, showcasing projects built with React, Next.js, Node.js, MongoDB, and more.",
    url: "https://prabinacharya1.com.np",
    images: {
      url: "https://prabinacharya1.com.np/Images/Portfolio-Thumbnail.png",
      width: 1200,
      height: 630,
      alt: "Portfolio of Prabin Acharya"
    }
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {},
  applicationName: "Portfolio | Prabin Acharya",
  appleWebApp: {
    title: "Portfolio | Prabin Acharya",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_KEY",
    yandex: ["YOUR_YANDEX_VERIFICATION_KEY"],
    other: {
      "msvalidate.01": ["YOUR_MS_VERIFICATION_KEY"],
      "facebook-domain-verification": ["YOUR_FACEBOOK_VERIFICATION_KEY"]
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x1692",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Portfolio",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://prabinacharya1.com.np"
  },
  headline: "Portfolio website of Prabin Acharya",
  description: "Fullstack Web Developer portfolio showcasing expertise in React, Next.js, Node.js, MongoDB, and more. Explore projects, skills, and experience in building dynamic web applications. Let's connect!",
  image: "https://prabinacharya1.com.np/Images/Portfolio-Thumbnail.png",
  dateCreated: "2025-03-11T10:00:00+07:00",
  datePublished: "2025-03-11T10:00:00+07:00",
  dateModified: "2025-03-11T10:00:00+07:00",
  author: {
    "@type": "Person",
    name: "Prabin Acharya",
    url: "https://www.linkedin.com/in/prabin-acharya-9345b32b5"
  },
  publisher: {
    "@type": "Person",
    name: "Prabin Acharya",
    logo: {
      "@type": "ImageObject",
      url: "https://prabinacharya1.com.np/icon.png"
    }
  },
  inLanguage: "en-US",
  isFamilyFriendly: "true"
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#DCF2F1] dark:bg-[#153448] transition-colors duration-300`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
