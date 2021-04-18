import { motion } from "framer-motion";

const Banner = (props) => {
  return (
    <motion.div
      className="flex flex-row items-center justify-between px-72 h-20 w-full bg-mist-2 overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          height: 0,
        },
        animate: {
          height: "5rem",
          transition: { duration: 0.3, delay: 0.6 },
        },
        exit: {
          height: 0,
          transition: { duration: 0.3 },
        },
      }}
    >
      <div className="flex flex-row items-center justify-start space-x-4">
        <div
          href="https://twitter.turb.ooo"
          className="flex flex-row items-center justify-center p-2 bg-mist-3 rounded-md"
          target="_blank"
        >
          <i className="twa twa-sparkles text-xl" />
        </div>
        <h1 className="font-inter font-medium text-xl text-gray-100">
          Turbo is opensource and we're building it in public on Twitter and
          Discord!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-end space-x-5">
        <a
          href="https://twitter.turb.ooo"
          className="banner-button flex flex-row items-center justify-center px-6 py-2 bg-gray-50 rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.setBannerOpen(false)}
          target="_blank"
        >
          <h1 className="font-inter font-medium text-lg text-mist-2">
            Learn More
          </h1>
        </a>
        <div
          href="https://twitter.turb.ooo"
          className="banner-button flex flex-row items-center justify-center px-4 py-2 bg-gray-50 cursor-pointer rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.setBannerOpen(false)}
          target="_blank"
        >
          <i className="far fa-times text-lg text-mist-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
