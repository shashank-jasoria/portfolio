// import Image from "next/image";

import MainLayout from "@/components/main-layout";
// import profilePic from "https://dydskofcuywsywygxbqs.supabase.co/storage/v1/object/public/portfolio/shashank.png";
// import NumberTicker from "@/components/ui/number-ticker";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Skills from "@/components/skills";

const About = () => {
  return (
    <section
      id="about"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
          text="About"
        />
        <div className="grid w-full grid-cols-8 gap-8 md:gap-16 relative z-[1]">
          <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex flex-col items-start justify-start order-2 sm:order-none about-text_grid">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              About
            </h2>
            <p className="font-medium">
              - Hi, I&apos;m Shashank a Software Developer adept at creating
              scalable systems, seamlessly integrating frontend interfaces with
              backend services, APIs, and databases.
            </p>
            <p className="font-medium my-4">
              - I&apos;m deeply committed to accessibility and inclusivity and
              believe that technology has the power to connect and empower
              people.
            </p>
            <p className="font-medium">
              - Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className="col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-dark dark:border-light dark:bg-dark order-1 sm:order-none ">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <div className="relative">
              <img src="/about-light.png" className="block dark:hidden w-full rounded-2xl" />
              <img src="/about-dark.png" className="hidden dark:block w-full rounded-2xl" />
            </div>
          </div>
        </div>

        <Skills />
      </MainLayout>
    </section>
  );
};

export default About;
