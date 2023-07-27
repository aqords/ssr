import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "../UI/Button/Button";
import sent from "/public/assets/images/sent.svg";
import { IsSentMessageProps } from "../../interfaces/IsSentMessageProps";

const SentForm = ({ isSentMessage }: IsSentMessageProps) => {
  const { t } = useTranslation();
  return (
    <div className="bg-black mt-[40px] mb-[40px] md:mb-[80px] border-[1px] border-neutral-700 rounded-[20px] p-[12px] md:p-[40px] flex flex-col lg:flex-row gap-[50px] justify-between">
      <div className="p-[12px] md:p-[0px]">
        <Image src={sent} alt="sent" />
        <p className="text-[36px] mt-[40px] mb-[16px]">
          {t("contact_sent_message")}
        </p>
        <p className="text-[20px] mb-[60px]">{t("contact_sent_thanks")}</p>
        <button onClick={() => isSentMessage(false)}>
          <Button
            outsideGradient={
              "hover:btn-hover-gradient hover:cursor-pointer rounded-[12px] md:mt-[0px] mt-[10px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] "
            }
            insideGradient="rounded-[12px] bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]"
          >
            <p className="mx-[30px] my-[14px] text-[19px] font-man">
              {t("contact_send_another_message")}
            </p>
          </Button>
        </button>
      </div>
    </div>
  );
};

export default SentForm;
