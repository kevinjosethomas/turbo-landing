import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Banner from "../components/core/Banner";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import Feature from "../components/index/Feature";
import FeatureSquare from "../components/index/FeatureSquare";

const Index = (props) => {
  const [bannerState, setBanner] = useState(true);

  useEffect(() => {
    const banner = localStorage.getItem("banner");

    setBanner(banner ? false : true);
  }, []);

  const set = () => {
    localStorage.setItem("banner", false);
    setBanner(false);
  };

  const featureSquareList = [
    {
      icon: "fas fa-lock",
      label: "Secure",
      description:
        "Turbo uses modern technology and is 100% opensource. You know exactly what is going on behind the scenes.",
      className: "rounded-t-md md:rounded-t-none md:rounded-tl-md",
    },
    {
      icon: "fas fa-bolt",
      label: "Efficient",
      description:
        "Turbo uses significantly less memory and CPU compared to other leading web browsers like Chrome and Edge.",
      className: "md:rounded-tr-md lg:rounded-tr-none",
    },
    {
      icon: "fas fa-sparkles",
      label: "Intuitive",
      description:
        "Turbo is fully keyboard navigationable. You can also enter custom hex codes to customize the browser to your liking.",
      className: "lg:rounded-tr-md",
    },
    {
      icon: "fas fa-badge-dollar",
      label: "Freemium",
      description:
        "Turbo is completely free to use, with no ads or interruptions! We also plan on adding a premium subscription.",
      className: "lg:rounded-bl-md",
    },
    {
      icon: "fas fa-code-branch",
      label: "Opensource",
      description:
        "Turbo is completely opensource. Anyone can contribute and add features they would like to see in their browser.",
      className: "md:rounded-bl-md lg:rounded-bl-none",
    },
    {
      icon: "fas fa-box-full",
      label: "Powerful",
      description:
        "Packed with features, Turbo is constantly updated to make your development process more productive!",
      className: "rounded-b-md md:rounded-b-none md:rounded-br-md",
    },
  ];

  const featureList = [
    "integrated api client",
    "localhost -> public tunneling",
    "fully keyboard navigationable",
    "split-screen tabs",
    "custom themes",
    "built-in terminal",
    "built-in adblocker",
    "rapid responsive web development",
    "wakatime integration",
    "seo rank checker",
    "built-in vpn",
    "custom icon themes",
    "paywall bypasser",
    "chrome extension support",
    "built-in git support",
    "test site meta tags",
    "built-in docs viewer",
    "quick web editor",
    "light mode transition warning",
    "advanced devtools",
    "prioritize stackoverflow results",
    "limit ram/cpu usage",
    "and more...",
  ];

  return (
    <div className="flex flex-col h-full min-h-screen overflow-x-hidden bg-night-mare-2">
      {bannerState ? (
        <AnimatePresence>{bannerState && <Banner set={set} />}</AnimatePresence>
      ) : null}
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center w-full py-16 md:py-32 lg:py-48 bg-night-mare-2"
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            scale: 0.6,
            y: 100,
          },
          animate: {
            scale: 1,
            y: 0,
            transition: { duration: 0.4 },
          },
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center max-w-xs space-y-4 text-center md:max-w-2xl xl:max-w-3xl">
            <h1 className="text-4xl font-extrabold text-gray-200 title-shadow font-inter md:text-7xl xl:text-8xl">
              The browser
              <br />
              for developers
            </h1>
            <h6 className="font-inter font-medium text-lg md:text-2xl xl:text-3xl text-gray-400 tracking-[-0.01em]">
              Turbo streamlines your dev process by prioritizing
              developer-friendly software. Keep scrolling 👇
            </h6>
          </div>
          <a
            href="https://forms.gle/J9xWJ9iuBMP3S29y6"
            className="waitlist-button flex flex-row items-center justify-center px-6 py-4 bg-mist-2 rounded-md transform hover:scale-[1.03] duration-700"
            target="_blank"
          >
            <h1 className="text-xl font-medium font-inter md:text-2xl text-gray-50">
              Join the waitlist <i className="ml-1 far fa-external-link-alt" />
            </h1>
          </a>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center w-full py-16 md:py-24 lg:py-32 bg-night-mare">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {featureSquareList.map((feature, index) => (
            <FeatureSquare
              key={index}
              icon={feature.icon}
              label={feature.label}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-16 space-y-16 lg:flex-row md:py-24 lg:py-32 lg:space-y-0 bg-night-mare-2">
        <img
          src="/images/steroids.svg"
          className="self-start w-10/12 lg:self-auto lg:w-1/2 3xl:w-auto rounded-r-2xl"
          draggable="false"
        />
        <div className="flex flex-col items-start justify-center w-full lg:items-center pl-10/12 lg:pl-0">
          <div className="flex flex-col items-start justify-center space-y-4 lg:items-start max-w-xxs md:max-w-md">
            <h1 className="font-inter font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Chrome,
              <br />
              on steroids
            </h1>
            <p className="font-medium text-gray-300 font-inter md:text-xl xl:text-2xl 2xl:text-3xl">
              <span className="font-semibold text-gray-100">Light.</span>{" "}
              Doesn’t use 90% of your memory for one tab. Unless you’ve got 25mb
              of RAM.
            </p>
            <p className="font-medium text-gray-300 font-inter tmd:ext-xl xl:text-2xl 2xl:text-3xl">
              <span className="font-semibold text-gray-100">Private.</span> No
              one but you and your pet cat can see your suspicious browser
              history 👀
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-16 lg:flex-row md:py-24 lg:py-32 bg-night-mare">
        <div className="flex flex-col items-start justify-center order-2 w-full mt-8 lg:items-center lg:order-none lg:mt-0 pl-10/12 lg:pl-0">
          <div className="flex flex-col items-start justify-center space-y-4 max-w-xxs md:max-w-md">
            <h1 className="font-inter font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Customizable,
              <br />
              for everyone
            </h1>
            <p className="font-medium text-gray-300 font-inter md:text-xl xl:text-2xl 2xl:text-3xl">
              <span className="font-semibold text-gray-100">Themes.</span>{" "}
              Personalize your browser with custom colors and icons! 🎨
            </p>
            <p className="font-medium text-gray-300 font-inter md:text-xl xl:text-2xl 2xl:text-3xl">
              <span className="font-semibold text-gray-100">Share.</span> Easily
              share your favorite themes with short strings ;)
            </p>
          </div>
        </div>
        <img
          src="/images/themes.svg"
          className="self-end order-1 w-10/12 mb-8 lg:order-none lg:self-auto lg:mb-0 lg:w-1/2 3xl:w-auto rounded-l-2xl"
          draggable="false"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full py-16 space-y-6 md:py-24 lg:py-24 bg-night-mare-2">
        <div className="flex flex-col items-center justify-center space-y-2 text-center max-w-xxs md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <h1 className="text-5xl font-extrabold font-inter text-gray-50">
            Planned Features ;)
          </h1>
          <p className="font-medium text-gray-400 font-inter md:text-xl">
            This list is an addition to the basic features you find on an
            ordinary browser! And some of these features are only concepts and
            might not ever appear in Turbo :(
          </p>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[88rem]">
          {featureList.map((feature, index) => (
            <Feature key={index} label={feature} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
