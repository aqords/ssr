interface ComponentProps {
  children: JSX.Element;
  insideGradient?: string;
  outsideGradient?: string;
}

const Button = ({
  children,
  insideGradient = "rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]",
  outsideGradient = "rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] hover:btn-hover-gradient",
}: ComponentProps) => {
  return (
    <div className={`${outsideGradient}`}>
      <div className={`flex h-full w-full  ${insideGradient}`}>{children}</div>
    </div>
  );
};

export default Button;
