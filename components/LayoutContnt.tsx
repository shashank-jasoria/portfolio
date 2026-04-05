"use client";
import { ThemeProvider } from "next-themes";
import Navigation from "./CV_Navigation";
import SideBar from "./CV_SideBar";
import { useCvView } from "./layoutContext";
import { Toaster } from "sonner";
import Navbar from "./navbar";
import Providers from "./providers";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../components/static/css/main.scss";
import { useEffect, useState } from "react";
import Loader from "./ui/loader";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCvView, setIsCvView } = useCvView();
  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCvView(!isCvView);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
    const event = new CustomEvent("cvViewChange", {
      detail: { isCvView },
    });
    window.dispatchEvent(event);
  }, [isCvView]);

  if(isLoading){
    return(
      <Loader/>
    )
  }

  return (
    <>
      {isCvView ? (
        // CV View Layout

        <div id="wrapper">
          <Navigation handleView={handleView} />
          <div id="main">{children} </div>
          <SideBar />
        </div>
      ) : (
        // Default Layout

        <ThemeProvider attribute="class">
          <Toaster />
          <Navbar handleView={handleView} />
          
          <Providers>{children}</Providers>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      )}
    </>
  );
}
