import React from "react";

export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className="border border-neutral-200 bg-neutral-100 text-gray-600 rounded-full px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
        What Are Early Stage Tax Requirements?
      </button>

      <div>
        <h1 className="font-medium text-4xl text-black tracking-tighter text-center mt-10">
          Magically simplify <br /> accounting and taxes
        </h1>

        <p className="max-w-2xl text-center text-lg text-neutral-700 mt-10">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 3:40pm.
        </p>
      </div>
    </div>
  );
};
