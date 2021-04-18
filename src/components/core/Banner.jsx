const Banner = (props) => {
  return (
    <div className="flex flex-row items-center justify-between px-72 h-20 w-full bg-mist-2">
      <div className="flex flex-row items-center justify-start space-x-4">
        <div
          href="https://twitter.turb.ooo"
          className="flex flex-row items-center justify-center w-11 h-11 bg-mist-3 rounded-md"
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
          className="banner-button flex flex-row items-center justify-center px-6 h-11 bg-gray-50 rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.setBannerOpen(false)}
          target="_blank"
        >
          <h1 className="font-inter font-medium text-lg text-mist-2">
            Learn More
          </h1>
        </a>
        <div
          href="https://twitter.turb.ooo"
          className="banner-button flex flex-row items-center justify-center w-11 h-11 bg-gray-50 cursor-pointer rounded-md transform hover:scale-[1.02] duration-700"
          onClick={() => props.setBannerOpen(false)}
          target="_blank"
        >
          <i className="far fa-times text-lg text-mist-2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
