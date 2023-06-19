import React from "react";

interface ComponentProps {
  text: string;
  insideGradient?: string;
  outsideGradient?: string;
}

const Button: React.FC<ComponentProps> = ({
  text,
  insideGradient = "bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]",
  outsideGradient = "bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]",
}) => {
  return (
    <div className="flex min-h-screen max-w-screen-sm items-center justify-center">
      <div className={`w-full rounded-full ${outsideGradient}`}>
        <div
          className={`flex h-full rounded-full w-full items-center justify-center ${insideGradient}`}
        >
          <button className="text-white text-sm px-[37px]">{text}</button>
        </div>
      </div>
    </div>
  );
};

export default Button;
