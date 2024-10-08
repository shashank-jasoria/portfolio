import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import MainLayout from "@/components/main-layout";
import profilePic from "@/public/shashank.png";
import AnimatedText from "@/components/animation/animated-text";
import HireMe from "@/components/hire-me";
import { SocialIcons } from "@/components/social-icons";
import { AnimatedSubscribeButton } from "@/components/ui/animated-button";

const Hero = () => {
  return (
    <section id="home">
      <MainLayout className="pt-28 lg:pt-0 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8">
          <div className="w-full lg:inline-block lg:w-1/2">
            <Image
              src={profilePic}
              alt="profile-pic"
              className="profilePic border-8 border-dark dark:border-light as-img"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
            <AnimatedText
              title="Transforming Ideas Into Reality Through Coding And Design."
              className="text-3xl sm:text-5xl lg:text-6xl text-center 2xl:text-6xl lg:text-left dark:text-light"
            />
            <p className="mt-4 text-xs sm:text-sm lg:text-base font-medium ">
              The digital world thirsts for innovation, and I&apos;m the chef
              serving up a feast of cutting-edge solutions. I blend creativity
              with technical expertise to cook up lightning-fast websites and
              apps that solve real problems and leave users hungry for more.
              Let&apos;s sit down and brainstorm - together, we can create the
              next digital sensation.
            </p>

            <div className="lg:hidden">
              <SocialIcons />
            </div>
            <div className="flex items-center lg:self-start mt-4 pb-8 gap-4">
              {/* <Link
                href="/book"
                className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-dark dark:hover:text-light"
              >
                Book a call
              </Link> */}

              <AnimatedSubscribeButton
                subscribeStatus={false}
                buttonTextColor="#FFFFFF"
                initialText={
                  <Link
                    href="/Shashank-Jasoria-CV.pdf"
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light"
                    download={true}
                    target="_blank"
                  >
                    Resume{" "}
                    <Download className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                }
                changeText={
                  <span className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-dark dark:hover:text-light">
                    Downloaded{" "}
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </MainLayout>

      <HireMe />
    </section>
  );
};

export default Hero;
