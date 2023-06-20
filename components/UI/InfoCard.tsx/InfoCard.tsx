import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

interface ComponentProps {
  title: string;
  desc: string;
  img?: string;
  imgStyle?: string;
  flex?: string;
}

const InfoCard: React.FC<ComponentProps> = ({
  title,
  desc,
  img,
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
    <div className="overflow-hidden">
      <Button
        outsideGradient={
          "rounded-[19px] hover:bg-gradient-to-r from-[#080809]  to-[#c6b38a] p-[2px]"
        }
        insideGradient={"block rounded-[19px] mobile-button-color p-[1px]"}
      >
        <div className={`${flex} relative`}>
          <div className={imgStyle}>
            {img ? <Image src={img} alt="" /> : ""}
          </div>
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
        </div>
      </Button>
    </div>
  );
};

export default InfoCard;
