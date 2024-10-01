import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import MouseFollowerComponent from "@/components/MouseFollower";

import "@/styles/globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

export const metadata: Metadata = {
  title: {
    default: "Shashank Jasoriaa Frontend Web & Mobile Developer",
    template: "%s - Shashank Jasoriaa Frontend Web & Mobile Developer",
  },
  description:
    "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
  keywords: [
    "web dev",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "web developer India",
    "Shashank",
    "Shashank Jasoriaa",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Shashank",
    images: "./opengraph-image.webp",
    description:
      "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
    creator: "Shashank",
  },
  openGraph: {
    type: "website",
    url: "https://www.shashankjasoria.com",
    locale: "en_US",
    title: "Shashank",
    images: "./opengraph-image.webp",
    description:
      "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
    siteName: "Shashank",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <MouseFollowerComponent>
          <SessionProvider>
            <ThemeProvider attribute="class">
              <Toaster />
              <Navbar />
              <Providers>{children}</Providers>
              <Footer />
              <SpeedInsights />
            </ThemeProvider>
          </SessionProvider>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
