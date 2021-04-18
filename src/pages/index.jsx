import { useState } from "react";

import Banner from "../components/core/Banner";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import Feature from "../components/index/Feature";
import FeatureSquare from "../components/index/FeatureSquare";

const Index = (props) => {
  const featureSquareList = [
    {
      icon: "fas fa-lock",
      label: "Secure",
      description:
        "Turbo uses modern technology and is 100% opensource. You know exactly what is going on behind the scenes.",
      className: "rounded-tl-md",
    },
    {
      icon: "fas fa-bolt",
      label: "Efficient",
      description:
        "Turbo uses significantly less memory and CPU compared to other leading web browsers like Chrome and Edge.",
    },
    {
      icon: "fas fa-sparkles",
      label: "Intuitive",
      description:
        "Turbo is fully keyboard navigationable. You can also enter custom hex codes to customize the browser to your liking.",
      className: "rounded-tr-md",
    },
    {
      icon: "fas fa-badge-dollar",
      label: "Freemium",
      description:
        "Turbo is completely free to use, with no ads or interruptions! We also plan on adding a premium subscription.",
      className: "rounded-bl-md",
    },
    {
      icon: "fas fa-code-branch",
      label: "Opensource",
      description:
        "Turbo is completely opensource. Anyone can contribute and add features they would like to see in their browser.",
    },
    {
      icon: "fas fa-box-full",
      label: "Powerful",
      description:
        "Packed with features, Turbo is constantly updated to make your development process more productive!",
      className: "rounded-br-md",
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

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen h-full bg-night-mare-2">
      {bannerOpen && <Banner setBannerOpen={setBannerOpen} />}
      <Navbar />
      <div className="flex flex-col items-center justify-center py-56 w-full bg-night-mare-2">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center max-w-3xl space-y-4 text-center">
            <h1 className="title-shadow font-inter font-extrabold text-8xl text-gray-200">
              The browser
              <br />
              for developers
            </h1>
            <h6 className="font-inter font-medium text-3xl text-gray-400 tracking-[-0.01em]">
              Turbo streamlines your dev process by prioritizing
              developer-friendly software. Keep scrolling 👇
            </h6>
          </div>
          <a
            href="https://forms.gle/J9xWJ9iuBMP3S29y6"
            className="waitlist-button flex flex-row items-center justify-center px-6 py-4 bg-mist-2 rounded-md transform hover:scale-[1.03] duration-700"
            target="_blank"
          >
            <h1 className="font-inter font-medium text-2xl text-gray-50">
              Join the waitlist <i className="far fa-external-link-alt ml-1" />
            </h1>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-32 w-full bg-night-mare">
        <div className="grid grid-cols-3 gap-2">
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
      <div className="flex flex-row items-center justify-center py-32 w-full bg-night-mare-2">
        <img
          src="/images/steroids.svg"
          className="w-min rounded-r-2xl"
          draggable="false"
        />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center space-y-4 max-w-md">
            <h1 className="font-inter font-extrabold text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Chrome,
              <br />
              on steroids
            </h1>
            <p className="font-inter font-medium text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Light.</span>{" "}
              Doesn’t use 90% of your memory for one tab. Unless you’ve got 25mb
              of RAM.
            </p>
            <p className="font-inter font-medium text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Private.</span> No
              one but you and your pet cat can see your suspicious browser
              history 👀
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-32 w-full bg-night-mare">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center space-y-4 max-w-md">
            <h1 className="font-inter font-extrabold text-7xl text-gray-50 tracking-tight leading-[1.1em]">
              Customizable,
              <br />
              for everyone
            </h1>
            <p className="font-inter font-medium text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Themes.</span>{" "}
              Personalize your browser with custom colors and icons!
            </p>
            <p className="font-inter font-medium text-3xl text-gray-300">
              <span className="font-semibold text-gray-100">Share.</span> Easily
              share your favorite themes with short strings ;)
            </p>
          </div>
        </div>
        <img
          src="/images/themes.svg"
          className="w-min rounded-l-2xl"
          draggable="false"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-24 space-y-6 w-full bg-night-mare-2">
        <div className="flex flex-col items-center justify-center space-y-2 max-w-4xl text-center">
          <h1 className="font-inter font-extrabold text-5xl text-gray-50">
            Planned Features ;)
          </h1>
          <p className="font-inter font-medium text-xl text-gray-400">
            This list is an addition to the basic features you find on an
            ordinary browser! And some of these features are only concepts and
            might not ever appear in Turbo :(
          </p>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap max-w-[88rem]">
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
