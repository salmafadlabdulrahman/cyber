const ProductSpec = ({name, value}) => {
  return (
    <div className="features-style">
      <div className="text-[.9em] flex items-center justify-between gap-[.7em]">
        <span className="text-[#A7A7A7] block">{name}: </span>
        <span className="text-[#4E4E4E] block">{value}</span>
      </div>
    </div>
  );
};

export default ProductSpec;
