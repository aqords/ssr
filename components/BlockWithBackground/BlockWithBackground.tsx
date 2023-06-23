import React from "react";
import { useTranslation } from "next-i18next";

interface db {
  title: string;
  desc1: string;
  desc2: string;
}

const BlockWithBackground: React.FC<db> = ({ title, desc1, desc2 }) => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray h-[479px] lg:h-[807px]">
      <div className="container h-full flex items-center">
        <div className="max-w-[624px]">
          <h3 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t(`${title}`)}
          </h3>
          <p className="font-man text-[15px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
            {t(`${desc1}`)}
          </p>
          <p className="font-man text-red [#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[20px] tracking-[-0.3px] mb-[0px]">
            {t(`${desc2}`)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockWithBackground;
