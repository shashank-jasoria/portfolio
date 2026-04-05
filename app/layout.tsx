"use client";
// import type { Metadata } from "next";
import { CvViewProvider } from "../components/layoutContext";
import { Montserrat } from "next/font/google";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
// import { Toaster } from "sonner";
import MouseFollowerComponent from "@/components/MouseFollower";

import "@/styles/globals.css";

import React, { useEffect } from "react";
// import Navigation from "@/components/CV_Navigation";
// import SideBar from "@/components/CV_SideBar";
import LayoutContent from "@/components/LayoutContnt";
import "../components/static/css/main.scss";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mint" });

// export const metadata: Metadata = {
//   title: {
//     default: "Shashank Jasoriaa Frontend Web & Mobile Developer",
//     template: "%s - Shashank Jasoriaa Frontend Web & Mobile Developer",
//   },
//   description:
//     "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
//   keywords: [
//     "web dev",
//     "fullstack developer",
//     "frontend developer",
//     "backend developer",
//     "web developer India",
//     "Shashank",
//     "Shashank Jasoriaa",
//   ],
//   twitter: {
//     card: "summary_large_image",
//     title: "Shashank",
//     images: "./opengraph-image.webp",
//     description:
//       "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
//     creator: "Shashank",
//   },
//   openGraph: {
//     type: "website",
//     url: "https://www.shashankjasoria.com",
//     locale: "en_US",
//     title: "Shashank",
//     images: "./opengraph-image.webp",
//     description:
//       "Experienced Software Developer specializing in web and mobile development. Proficient in React, React Native, and responsive design. Let's build innovative solutions together.",
//     siteName: "Shashank",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleCvViewChange = (event: Event) => {
      // Cast the event to CustomEvent to access the 'detail' property
      const customEvent = event as CustomEvent;
      const { isCvView } = customEvent.detail;
      const htmlElement = document.documentElement;

      if (isCvView) {
        htmlElement.classList.add("cv_view");
      } else {
        htmlElement.classList.remove("cv_view");
      }
    };

    // Listen for the custom event
    window.addEventListener("cvViewChange", handleCvViewChange);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("cvViewChange", handleCvViewChange);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <MouseFollowerComponent>
          <CvViewProvider>
            <SessionProvider>
              <LayoutContent>{children}</LayoutContent>
            </SessionProvider>
          </CvViewProvider>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
