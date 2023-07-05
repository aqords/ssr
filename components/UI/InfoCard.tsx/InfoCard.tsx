import Image, { StaticImageData } from "next/image";
import Button from "../Button/Button";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  desc: string;
  href: string;
  img?: StaticImageData;
  imgStyle?: string;
  imgWrapper?: string;
  flex?: string;
  bgLight?: string;
}

const InfoCard = ({
  title,
  desc,
  href,
  img,
  imgStyle,
  imgWrapper,
  flex,
  bgLight,
}: InfoCardProps) => {
  const { t } = useTranslation();

  function clampString(inputString: string): string {
    if (inputString.length <= 230) {
      return inputString;
    }

    inputString = inputString.slice(0, 230);
    inputString += "...";

    return inputString;
  }

  return (
    <Button
      outsideGradient={
        "overflow-hidden rounded-[15px] hover:infocard-gradient p-[2px] hover:infocard-shadow relative"
      }
      insideGradient={
        "block rounded-[15px] bg-black mobile-button-color p-[1px]"
      }
    >
      <div className={`${flex ? `${flex}` : ""} relative`}>
        <div className={imgWrapper}>
          {img ? (
            <Image sizes="50vw" src={img} className={imgStyle} alt="" />
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col w-full items-start gap-[17px] md:gap-[37px] p-[20px] md:p-[40px]">
          <h3 className="text-[32px] mb-[2px] md:text-[40px]">{t(title)}</h3>
          <p className="md:text-[20px]  text-[#838383] font-man max-w-[700px] mt-[15px]">
            {clampString(desc)}
          </p>
          <Link href={href}>
            <Button
              outsideGradient={
                "hover:cursor-pointer rounded-full md:mt-[0px] mt-[10px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]"
              }
            >
              <p className="mx-[110px] my-[10px] md:mx-[55px] md:my-[10px] md:text-[20px] font-man">
                {t("infocard_view")}
              </p>
            </Button>
          </Link>
        </div>
        {bgLight ? <div className={bgLight}></div> : ""}
      </div>
    </Button>
  );
};

export default InfoCard;
