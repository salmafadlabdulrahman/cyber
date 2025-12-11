import cakeImg from "/assets/cake.jpg";

const ProductCard = () => {
  return (
    <section className=" w-[250px] shadow-md rounded-2xl relative">
      <img src={cakeImg} alt="cake" className="w-full h-[200px] rounded-t-lg" />

      <div className="pl-[1em]">
        <h3 className="mt-[2em]">Chocolate Hazelnut molten cake</h3>
        <p className="line-clamp-2 mt-[.5em]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eius
          necessitatibus laudantium, repellendus temporibus quia doloribus ea
          quae exercitationem dolorem nobis consectetur sequi aperiam reiciendis
          molestias cupiditate fugit? Eaque, earum!
        </p>
      </div>

      <div className="flex justify-between items-center mt-[2em] pl-[1em]">
        <p>250 EGP</p>
        <button
          className={`bg-purple-600 px-[1em] py-[.5em] rounded-tl-lg rounded-br-lg`}
        >
          {" "}
          <span className=" text-2xl inline-block transform transition-transform duration-500 group-hover:rotate-225">
            +{" "}
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductCard;