import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

interface ComponentProps {
  title: string;
  desc: string;
  img?: string;
  img1?: string;
  imgStyle?: string;
  flex?: string;
}

const InfoCard: React.FC<ComponentProps> = ({
  title,
  desc,
  img,
  img1,
  imgStyle,
  flex,
}) => {
  function clampString(inputString: string): string {
    if (inputString.length <= 230) {
      return inputString;
    }

    inputString = inputString.slice(0, 230);
    inputString += "...";

    return inputString;
  }

  return (
    <div className="hover:cursor-pointer">
      <Button
        outsideGradient={
          "rounded-[20px] hover:bg-gradient-to-r from-[#080809]  to-[#c6b38a] p-[2px]"
        }
        insideGradient={"block rounded-[19px] mobile-button-color p-[1px]"}
      >
        <div className={`${flex} relative`}>
          {img ? <Image className={imgStyle} src={img} alt="" /> : ""}
          <div className="flex flex-col w-full items-start gap-[37px] p-[40px]">
            <h3 className="text-[40px] ">{title}</h3>
            <p className="text-[20px]  text-[#838383] font-man max-w-[700px]">
              {clampString(desc)}
            </p>
            <Button>
              <button className="mx-[60px] my-[14px] text-[20px] font-man">
                View more
              </button>
            </Button>
          </div>
          {img1 ? <Image className={imgStyle} src={img1} alt="" /> : ""}
        </div>
      </Button>
    </div>
  );
};

export default InfoCard;
