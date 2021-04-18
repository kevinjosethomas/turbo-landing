import Navbar from "../components/core/Navbar";

const Index = (props) => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-night-mare-2">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-48 w-full bg-night-mare-2">
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
    </div>
  );
};

export default Index;
