const FeatureSquare = (props) => {
  return (
    <div
      className={`flex flex-col items-start justify-center p-8 xl:p-10 space-y-2 w-72 xl:w-80 h-72 xl:h-80 bg-night-hawk ${props.className}`}
    >
      <i className={`${props.icon} text-3xl text-mist-2`} />
      <h1 className="font-inter font-bold text-3xl text-gray-300">
        {props.label}
      </h1>
      <p className="font-inter font-medium text-lg text-gray-400">
        {props.description}
      </p>
    </div>
  );
};

export default FeatureSquare;
