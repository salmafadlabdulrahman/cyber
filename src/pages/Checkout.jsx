// import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrolleyIcon from "@mui/icons-material/Trolley";
import PaymentsIcon from "@mui/icons-material/Payments";

const Checkout = () => {
  return (
    <section className="w-[90%] m-auto mb-[4em]">
      {/* <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <LocationOnIcon />
          <div className="">
            <span className="block">Step 1</span>
            <span className="block">Address</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TrolleyIcon />
          <div>
            <span className="block">Step 2</span>
            <span className="block">Shipping</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <PaymentsIcon />
          <div>
            <span className="block">Step 2</span>
            <span className="block">Shipping</span>
          </div>
        </div>
      </div> */}

      <div className="border-2 border-[#EBEBEB] mt-[4em] rounded-md p-4 md:w-[70%] lg:w-[40%] m-auto">
        <h2 className="text-2xl font-semibold">Shipping</h2>
        <div className="mt-[1.5em]">
          <label htmlFor="address" className="text-xl font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="221b baker st"
            className="block border border-dark-black p-2 rounded-md w-full "
          />

          <label htmlFor="city" className="mt-[1em] block text-xl font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="New York"
            className="block border border-dark-black p-2 rounded-md w-full"
          />

          <label
            htmlFor="country"
            className="mt-[1em] block text-xl font-medium"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="USA"
            className="block border border-dark-black p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-5 mt-[2em] ">
        <button className="cursor-pointer border-2 border-dark-black rounded-md px-[2em] py-[.3em]">
          Back
        </button>
        <button className="cursor-pointer bg-dark-black text-white rounded-md px-[2em] py-[.4em]">
          Next
        </button>
      </div>
    </section>
  );
};

export default Checkout;
