import MainLayout from "./main-layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm ld:text-lg dark:text-light dark:border-light">
      <MainLayout className="py-4 md:py-6 flex items-center justify-center">
        <span>
          &copy; {new Date().getFullYear()} Shashank, All rights Reserved
        </span>
      </MainLayout>
    </footer>
  );
};

export default Footer;
