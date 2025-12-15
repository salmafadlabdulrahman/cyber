const OrderSummary = () => {
  return (
    <section className="border border-[#EBEBEB] rounded-md p-4 mt-[4em] md:w-[70%] md:m-auto md:my-[4em] lg:mt-[2em] lg:w-[40%]">
      <h4 className="font-semibold text-2xl">Order Summary</h4>
      <div className="mt-[1em]">
        <label htmlFor="code" className="text-[#545454] block">
          Discount code / Promo code
        </label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Code"
          className="border border-[#EBEBEB] mt-[.5em] outline-none rounded-md p-3 w-full"
        />
      </div>

      <div>
        <label htmlFor="card number" className="text-[#545454] block mt-[1em]">
          Your bonus card number
        </label>
        <div className="border border-[#EBEBEB] mt-[.5em] outline-none rounded-md p-3 flex justify-between items-center">
          <input
            type="text"
            id="card number"
            name="card number"
            placeholder="Enter Card Number"
            className="outline-none"
          />
          <button className="bg-dark-black text-white rounded-md px-5 py-1">
            Apply
          </button>
        </div>
      </div>

      <div className="mt-[2em]">
        <div className="flex justify-between flex-wrap font-semibold mb-[1em]">
          <span>Subtotal</span>
          <span>$2347</span>
        </div>

        <div className="flex justify-between flex-wrap font-semibold mb-[1em] text-[#545454]">
          <span>Estimated Tax</span>
          <span>$50</span>
        </div>

        <div className="flex justify-between flex-wrap font-semibold mb-[1em] text-[#545454]">
          <span>Estimated shipping & Handling</span>
          <span>$29</span>
        </div>

        <div className="flex justify-between flex-wrap font-semibold">
          <span>Total</span>
          <span>$2426</span>
        </div>
      </div>
      <button className="m-auto block mt-[2em] bg-dark-black text-white w-full rounded-md py-3">
        Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
