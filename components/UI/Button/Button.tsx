import React from "react";

const Button = () => {
  return (
    <div className="flex min-h-screen max-w-screen-sm items-center justify-center">
      <div className=" w-full rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]">
        <div className="flex h-full rounded-full w-full items-center justify-center bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]">
          <button className="text-white text-sm px-[37px]">
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
