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
              "hover:btn-hover-gradient hover:cursor-pointer rounded-full md:mt-[0px] mt-[10px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] w-[300px]"
            }
          >
            <p className="ml-[40px] my-[10px] text-[20px] font-man">
              {t("contact_send_another_message")}
            </p>
          </Button>
        </button>
      </div>
    </div>
  );
};

export default SentForm;
