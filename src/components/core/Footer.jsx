const Footer = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 px-10 lg:px-40 2xl:px-72 py-6 w-full bg-night-mare">
      <p className="font-inter font-medium lg:text-lg xl:text-xl text-gray-200 text-center">
        developed by{" "}
        <a
          href="https://github.codebyte.team"
          className="font-semibold text-mist"
          target="_blank"
        >
          teamcodebyte
        </a>{" "}
        and{" "}
        <a
          href="https://github.turbobrowser.io"
          className="font-semibold text-mist"
          target="_blank"
        >
          community
        </a>
        , inspired by{" "}
        <a href="https://linear.app" target="_blank">
          Linear
        </a>
      </p>
      <div className="flex flex-row items-center justify-end space-x-4">
        <a
          href="https://discord.turbobrowser.io"
          className="fab fa-discord cursor-pointer text-xl text-gray-50 hover:text-[#7289DA] transition duration-500"
          target="_blank"
        />
        <a
          href="https://github.turbobrowser.io"
          className="fab fa-github cursor-pointer text-xl text-gray-50 hover:text-[#4078C0] transition duration-500"
          target="_blank"
        />
        <a
          href="https://twitter.turbobrowser.io"
          className="fab fa-twitter cursor-pointer text-xl text-gray-50 hover:text-[#1DA1F2] transition duration-500"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Footer;
