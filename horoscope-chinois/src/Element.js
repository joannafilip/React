const Element = ({
  image, nom, description,
}) => (
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 border-2 border-black-500 border-opacity-75 md:border-opacity-100">
    <h2 className="text-center font-bold">{nom}</h2>
    <img src={`images/${image}`} />
    <p>{description}</p>
  </div>
);

export default Element;
