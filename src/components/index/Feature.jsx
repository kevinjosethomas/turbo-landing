const Feature = (props) => {
  return (
    <div className="flex flex-row items-center justify-center m-1 px-4 py-1 text-gray-300 hover:text-gray-50 bg-night-hawk-100 hover:bg-night-hawk select-none transition duration-500">
      <p className="font-inter text-lg">{props.label}</p>
    </div>
  );
};

export default Feature;
