import { motion } from "framer-motion";

const Banner = (props) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-32 px-10 space-y-4 overflow-hidden md:flex-row md:justify-between lg:px-40 2xl:px-72 md:space-y-0 md:h-20 bg-mist-2"
      exit="exit"
      variants={{
        exit: {
          height: 0,
          transition: { duration: 0.3 },
        },
      }}
    >
      <div className="flex flex-row items-center self-start justify-start space-x-2 md:self-auto md:space-x-2 xl:space-x-4">
        <div
          href="https://twitter.turbobrowser.io"
          className="flex flex-row items-center justify-center p-2 rounded-md bg-mist-3"
          target="_blank"
        >
          <i className="twa twa-sparkles md:text-md lg:text-sm xl:text-xl" />
        </div>
        <h1 className="text-xs font-medium text-gray-100 font-inter md:text-xs lg:text-xs xl:text-lg 2xl:text-lg 3xl:text-xl">
          Turbo is opensource and we're building it in public on Twitter and
          Discord!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-end w-full space-x-3 md:space-x-3 lg:space-x-5 md:w-auto">
        <a
          href="https://twitter.turbobrowser.io"
          className="banner-button flex flex-row items-center justify-center px-3 lg:px-4 xl:px-6 py-2 w-full md:w-auto bg-gray-50 rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.set()}
          target="_blank"
        >
          <h1 className="font-medium font-inter md:text-sm lg:text-xs xl:text-lg text-mist-2">
            Learn More
          </h1>
        </a>
        <div
          href="https://twitter.turbobrowser.io"
          className="banner-button flex flex-row items-center justify-center px-4 md:px-3 xl:px-4 md:py-2 h-full md:h-auto bg-gray-50 cursor-pointer rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.set()}
          target="_blank"
        >
          <i className="far fa-times md:text-sm lg:text-xs xl:text-lg text-mist-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
