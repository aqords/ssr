import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import FooterButton from "../UI/Button/FooterButton";

const ContactForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");

  const validateForm = (): void => {
    name !== "" &&
    email !== "" &&
    subject !== "" &&
    text !== "" &&
    emailError === "" &&
    subjectError === "" &&
    textError === ""
      ? console.log("done")
      : console.log("error");
  };

  const sendForm = () => {};

  const emailHandler = (email: string) => {
    setEmail(email);
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("");
    } else {
      setEmailError(`${t("Enter a valid email")}`);
    }
  };

  const subjectHandler = (subject: string) => {
    setSubject(subject);
    if (subject.length > 50) {
      setSubjectError(`${t("Max characters limit")}`);
    } else {
      setSubjectError("");
    }
  };

  const textHandler = (text: string) => {
    setText(text);
    if (text.length > 255) {
      setTextError(`${t("Max characters limit")}`);
    } else {
      setTextError("");
    }
  };

  return (
    <div className="bg-black mt-[40px] mb-[40px] md:mb-[80px] border-[1px] border-neutral-700 rounded-[20px] p-[12px] md:p-[40px] flex flex-col lg:flex-row gap-[50px] justify-between">
      <div className="max-w-[348px] relative">
        <p className="text-[32px] md:text-[36px] mb-[20px] mt-[25px] md:mt-[8px]">
          {t("Get in touch")}
        </p>
        <p className="font-man text-[16px] md:text-[20px] mb-[15px] md:mb-[30px]">
          {t("Ask your questions and leave your feedback.")}
        </p>
        <p className="font-man text-[#838383] text-[14px] md:text-[16px] mb-[40px] md:mb-[100px] leading-[25px]">
          {t(
            "We will be more than happy to reply back with any info you might need."
          )}
        </p>
        <p className="font-man text-[#838383] text-[14px] md:text-[16px] md:mb-[20px]">
          {t("Email address:")}
        </p>
        <p className="font-man text-[16px] md:text-[20px] mt-[-10px]">
          support@aqords.com
        </p>
        <span className="block absolute top-[-50px] right-[-40px] w-[0px] lg:w-[1px] h-[463px] bg-neutral-700 my-[10px]"></span>
      </div>
      <div className="relative font-man text-[15px] w-full lg:max-w-[575px] ">
        <span className="block  absolute top-[-25px] right-[0px] lg:h-[0px] h-[1px] w-full bg-neutral-700 my-[10px]"></span>
        <div className="sm:flex flew-wrap gap-[10px] justify-between mb-[10px] mt-[-5px]">
          <label className="flex flex-col text-[#6B7280] text-[12px] ">
            <p>
              {t("Enter your email")}
              <span className="text-[#F44A77]"> *</span>
            </p>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Write your name")}
              className="border border-transparent hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] sm:w-[276px] py-[5px] text-[15px]"
              type="text"
            />
          </label>
          <label className="relative flex flex-col text-[#6B7280] text-[12px] ">
            <p>
              {t("E-mail address where the answer will be sent")}
              <span className="text-[#F44A77]"> *</span>
            </p>
            <input
              onBlur={(e) => emailHandler(e.target.value)}
              className="border border-transparent hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] sm:w-[276px] py-[5px] text-[15px]"
              placeholder="write your email"
              type="email"
            />
            {emailError && email !== "" ? (
              <span className="absolute bottom-[-30px] right-[0px] text-[#F44A77]">
                {emailError}
              </span>
            ) : (
              ""
            )}
          </label>
        </div>
        <label className="relative flex flex-col text-[#6B7280] text-[12px] py-[5px] mb-[10px] mt-[-5px]">
          <p>
            {t("Message subject")} <span className="text-[#F44A77]"> *</span>
          </p>
          <input
            onChange={(e) => subjectHandler(e.target.value)}
            className="border border-transparent hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] py-[7px] text-[15px]"
            placeholder={t("Write a subject")}
            type="text"
          />
          {subjectError && subject !== "" ? (
            <span className="absolute bottom-[-30px] right-[0px] text-[#F44A77]">
              {subjectError}
            </span>
          ) : (
            ""
          )}
          <span
            className={`block absolute top-[43px] right-[13px] text-[15px] ${
              subject.length > 50 ? "text-[#F44A77]" : ""
            }`}
          >
            {subject.length} / 50
          </span>
        </label>
        <label className="relative flex flex-col text-[#6B7280] text-[12px] mt-[-5px]">
          <p>
            {t("Message")} <span className="text-[#F44A77]"> *</span>
          </p>
          <textarea
            onChange={(e) => textHandler(e.target.value)}
            className="border border-transparent hover:border-[#737373] hover:border-[1px] focus:focusInput resize-none bg-[#222221] rounded-[6px] px-[12px] py-[7px] text-[15px] mb-[20px] h-[120px]"
            placeholder={t("Write your message")}
          />
          {textError && text !== "" ? (
            <span className="absolute bottom-[-30px] right-[0px] text-[#F44A77]">
              {textError}
            </span>
          ) : (
            ""
          )}
          <span
            className={`block absolute top-[114px] right-[13px] text-[15px] ${
              text.length > 255 ? "text-[#F44A77]" : ""
            }`}
          >
            {text.length} / 255
          </span>
        </label>
        <div className="flex justify-end">
          <FooterButton
            onClick={validateForm}
            style="font-normal  font-man py-[12px] w-full smx:w-auto px-[20px] smx:px-[40px] bg-gradient-to-br from-[#ADA785] to-[#8D794C] rounded-[6px] leading-[19px]"
          >
            <span className="w-[100%]">{t("Send message")}</span>
          </FooterButton>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
