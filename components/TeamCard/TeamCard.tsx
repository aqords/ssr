import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

interface TeamCardProps {
  img?: StaticImageData;
  name: string;
  position: string;
  skills: string;
  desc: string;
}

const TeamCard = ({ img, name, position, skills, desc }: TeamCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row gap-[60px] md:gap-[116px] mb-[60px] md:mb-[110px]">
      {img ? (
        <Image className="w-[160px] h-[160px]" src={img} alt="avatar" />
      ) : (
        ""
      )}
      <div className="flex flex-col gap-[12px] max-w-[510px]">
        <p className="font-bold text-[32px] tracking-[-0.64px] md:text-[40px] md:tracking-[-0.8px] md:leading-[64px]">
          {t(`${name}`)}
        </p>
        <p className="font-bold text-[24px] tracking-[-0.48px] text-gray">
          {t(`${position}`)}
        </p>
        <p className="font-man text-[20px] tracking-[-0.14px] leading-[32px] mb-[20px]">
          {t(`${skills}`)}
        </p>
        <p className="font-man text-[16px] tracking-[-0.14px] leading-[32px] text-gray">
          {t(`${desc}`)}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
