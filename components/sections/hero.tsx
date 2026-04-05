"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import MainLayout from "@/components/main-layout";
import AnimatedText from "@/components/animation/animated-text";
import HireMe from "@/components/hire-me";
import { SocialIcons } from "@/components/social-icons";
import { AnimatedSubscribeButton } from "@/components/ui/animated-button";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const isReady = imageLoaded && fontsLoaded;

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    } else {
      setFontsLoaded(true);
    }
  }, []);

  return (
    <section id="home" className="relative">
      {/* FULL PAGE SPINNER */}
      {!isReady && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-light dark:bg-dark">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-dark border-t-transparent dark:border-light dark:border-t-transparent" />
        </div>
      )}

      {/* HERO CONTENT */}
      <div
        className={`transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainLayout className="pt-28 lg:pt-0 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8">
            {/* IMAGE */}
            <div className="w-full lg:inline-block lg:w-1/2 flex justify-center">
              <img
                src="https://dydskofcuywsywygxbqs.supabase.co/storage/v1/object/public/portfolio/shashank.png"
                alt="profile-pic"
                className="profilePic border-8 border-dark dark:border-light as-img"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
              <AnimatedText
                title="Transforming Ideas Into Reality Through Coding And Design."
                className="text-3xl sm:text-5xl lg:text-6xl text-center 2xl:text-6xl lg:text-left dark:text-light"
              />

              <p className="mt-4 text-xs sm:text-sm lg:text-base font-medium">
                The digital world thirsts for innovation, and I&apos;m the chef
                serving up a feast of cutting-edge solutions...
              </p>

              <div className="lg:hidden">
                <SocialIcons />
              </div>

              <div className="flex items-center lg:self-start mt-4 pb-8 gap-4">
                <AnimatedSubscribeButton
                  subscribeStatus={false}
                  buttonTextColor="#FFFFFF"
                  initialText={
                    <Link
                      href="/Shashank.pdf"
                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light"
                      download
                      target="_blank"
                    >
                      Resume
                      <Download className="ml-2 h-6 w-6" />
                    </Link>
                  }
                  changeText={
                    <span className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark dark:border-light">
                      Downloaded
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </MainLayout>

        <HireMe />
      </div>
    </section>
  );
};

export default Hero;

