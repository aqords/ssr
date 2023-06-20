import React from "react";

interface ComponentProps {
  children: JSX.Element;
  insideGradient?: string;
  outsideGradient?: string;
}

const Button: React.FC<ComponentProps> = ({
  children,
  insideGradient = "bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]",
  outsideGradient = "bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]",
}) => {
  return (
    <div
      className={`rounded-full  ${outsideGradient} hover:btn-hover-gradient`}
    >
      <div className={`flex h-full rounded-full w-full  ${insideGradient}`}>
        {children}
      </div>
    </div>
  );
};

export default Button;
