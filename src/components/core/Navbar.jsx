const Navbar = (props) => {
  return (
    <nav className="flex flex-row items-center justify-between px-10 lg:px-40 2xl:px-72 py-5 w-full bg-night-mare">
      <h1 className="mark-shadow select-none font-inter font-extrabold text-2xl md:text-4xl text-gray-200 tracking-tight">
        turbo
      </h1>
      <div className="flex flex-row items-center justify-end space-x-3 md:space-x-6">
        <div className="flex flex-row items-center justify-end space-x-2 md:space-x-4">
          <a
            href="https://github.turb.ooo"
            className="fab fa-github cursor-pointer text-lg md:text-xl text-gray-50 hover:text-[#4078C0] transition duration-500"
            target="_blank"
          />
          <a
            href="https://twitter.turb.ooo"
            className="fab fa-twitter cursor-pointer text-lg md:text-xl text-gray-50 hover:text-[#1DA1F2] transition duration-500"
            target="_blank"
          />
        </div>
        <a
          href="https://discord.turb.ooo"
          className="discord-button flex flex-row items-center justify-center px-3 md:px-6 py-2 bg-mist-2 rounded md:rounded-md transform hover:scale-[1.02] duration-700"
          target="_blank"
        >
          <h6 className="font-inter font-medium text-xs md:text-lg text-gray-50">
            join our discord
          </h6>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
