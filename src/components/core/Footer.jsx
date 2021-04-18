const Footer = (props) => {
  return (
    <div className="flex flex-row items-center justify-between px-72 py-6 w-full bg-night-mare">
      <p className="font-inter font-medium text-xl text-gray-200">
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
          href="https://github.turb.ooo/"
          className="font-semibold text-mist"
          target="_blank"
        >
          community
        </a>
        , inspired by{" "}
        <a href="https://linear.app/" target="_blank">
          Linear
        </a>
      </p>
      <div className="flex flex-row items-center justify-end space-x-4">
        <a
          href="https://discord.turb.ooo"
          className="fab fa-discord cursor-pointer text-xl text-gray-50 hover:text-[#7289DA] transition duration-500"
          target="_blank"
        />
        <a
          href="https://github.turb.ooo"
          className="fab fa-github cursor-pointer text-xl text-gray-50 hover:text-[#4078C0] transition duration-500"
          target="_blank"
        />
        <a
          href="https://twitter.turb.ooo"
          className="fab fa-twitter cursor-pointer text-xl text-gray-50 hover:text-[#1DA1F2] transition duration-500"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Footer;
