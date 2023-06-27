interface FooterButtonProps {
  style?: string;
  children: JSX.Element;
  onClick?: () => void;
}

const FooterButton = ({
  style = "font-normal  font-man py-[12px] px-[20px] smx:px-[40px] bg-gradient-to-br from-[#ADA785] to-[#8D794C] rounded-[6px] leading-[19px]",
  children,
  onClick,
}: FooterButtonProps) => {
  return (
    <button className={style} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default FooterButton;
