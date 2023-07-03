import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import FooterButton from "../UI/Button/FooterButton";

const ContactForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");

  const nameHandler = (name: string) => {
    setName(name);
    if (name.length === 0) {
      setNameError(`${t("form_characters_error_min_name")}`);
    } else if (name.length < 2) {
      setNameError(`${t("form_characters_error_min_name")}`);
    } else {
      setNameError("");
    }
  };

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
      setEmailError(t("form_email_error"));
    }
  };

  const subjectHandler = (subject: string) => {
    setSubject(subject);
    if (subject.length > 50) {
      setSubjectError(`${t("form_characters_error")}`);
    }
    if (subject.length < 10) {
      setSubjectError(`${t("form_characters_error_min_sub")}`);
    } else {
      setSubjectError("");
    }
  };

  const textHandler = (text: string) => {
    setText(text);
    if (text.length > 255) {
      setTextError(`${t("form_characters_error")}`);
    }
    if (text.length < 10) {
      setTextError(`${t("form_characters_error_min_mes")}`);
    } else {
      setTextError("");
    }
  };

  const validateForm = (): void => {
    nameHandler(name);
    emailHandler(email);
    textHandler(text);
    subjectHandler(subject);
    if (
      nameError === "" &&
      emailError === "" &&
      subjectError === "" &&
      textError === ""
    ) {
      setName("");
      setEmail("");
      setSubject("");
      setText("");
      // console.log("done");
    } else {
      // console.log("error");
    }
  };

  return (
    <div className="bg-black mt-[40px] mb-[40px] md:mb-[80px] border-[1px] border-neutral-700 rounded-[20px] p-[12px] md:p-[40px] flex flex-col lg:flex-row gap-[50px] justify-between">
      <div className="max-w-[348px] relative">
        <p className="text-[32px] md:text-[36px] mb-[20px] mt-[25px] md:mt-[8px]">
          {t("contact_form_title")}
        </p>
        <p className="font-man text-[16px] md:text-[20px] mb-[15px] md:mb-[30px]">
          {t("contact_form_desc1")}
        </p>
        <p className="font-man text-[#838383] text-[14px] md:text-[16px] mb-[40px] md:mb-[100px] leading-[25px]">
          {t("contact_form_desc2")}
        </p>
        <p className="font-man text-[#838383] text-[14px] md:text-[16px] md:mb-[20px]">
          {t("contact_email_address")}
        </p>
        <p className="font-man text-[16px] md:text-[20px] mt-[-10px]">
          support@aqords.com
        </p>
        <span className="block absolute top-[-50px] right-[-40px] w-[0px] lg:w-[1px] h-[491px] bg-neutral-700 my-[10px]"></span>
      </div>
      <div className="relative font-man text-[15px] w-full lg:max-w-[575px] ">
        <span className="block  absolute top-[-25px] right-[0px] lg:h-[0px] h-[1px] w-full bg-neutral-700 my-[10px]"></span>
        <div className="sm:flex flew-wrap gap-[10px] justify-between mb-[20px] mt-[-5px]">
          <label className="relative flex flex-col text-[#6B7280] text-[12px] ">
            <p className="text-[#ffffff]">
              {t("contact_enter_name")}
              <span className="text-[#F44A77]"> *</span>
            </p>
            <input
              value={name}
              onChange={(e) => nameHandler(e.target.value)}
              placeholder={t("contact_write_name")}
              className={`border-[1px]   ${
                nameError ? "border-[#F44A77]" : ""
              } hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] sm:w-[276px] py-[5px] text-[15px]`}
              type="text"
            />
            {nameError ? (
              <span className="absolute bottom-[-30px] left-[0px] text-[#F44A77]">
                {nameError}
              </span>
            ) : (
              ""
            )}
          </label>
          <label className="relative flex flex-col text-[#6B7280] text-[12px]">
            <p className="text-[#ffffff]">
              {t("contact_enter_email")}
              <span className="text-[#F44A77]"> *</span>
            </p>
            <input
              value={email}
              onChange={(e) => emailHandler(e.target.value)}
              className={`border-[1px]   ${
                emailError ? "border-[#F44A77]" : ""
              }  hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] sm:w-[276px] py-[5px] text-[15px]`}
              placeholder={t("contact_write_email")}
              type="email"
            />
            {emailError ? (
              <span className="absolute bottom-[-30px] left-[0px] text-[#F44A77]">
                {emailError}
              </span>
            ) : (
              ""
            )}
          </label>
        </div>
        <label className="relative flex flex-col text-[#6B7280] text-[12px] py-[5px] mb-[20px] mt-[-5px]">
          <p className="text-[#ffffff]">
            {t("contact_message_subject")}
            <span className="text-[#F44A77]"> *</span>
          </p>
          <input
            value={subject}
            onChange={(e) => subjectHandler(e.target.value)}
            className={`border-[1px]   ${
              subjectError ? "border-[#F44A77]" : ""
            } border hover:border-[#737373] hover:border-[1px] focus:focusInput bg-[#222221] rounded-[6px] px-[12px] py-[7px] text-[15px]`}
            placeholder={t("contact_write_subject")}
            type="text"
          />
          {subjectError ? (
            <span className="absolute bottom-[-25px] left-[0px] text-[#F44A77]">
              {subjectError}
            </span>
          ) : (
            ""
          )}
          <span
            className={`block bg-[#222221] rounded-[5px] px-[3px] leading-[20px] absolute top-[52px] right-[13px] text-[15px] ${
              subject.length > 50 ? "text-[#F44A77]" : ""
            }`}
          >
            {subject.length} / 50
          </span>
        </label>
        <label className="relative flex flex-col text-[#6B7280] text-[12px] mt-[-5px] mb-[10px] sm:mb-[0px]">
          <p className="text-[#ffffff]">
            {t("contact_message")} <span className="text-[#F44A77]"> *</span>
          </p>
          <textarea
            value={text}
            onChange={(e) => textHandler(e.target.value)}
            className={`border-[1px]   ${
              textError ? "border-[#F44A77]" : ""
            } border  hover:border-[#737373] hover:border-[1px] focus:focusInput resize-none bg-[#222221] rounded-[6px] px-[12px] py-[7px] text-[15px] h-[120px]`}
            placeholder={t("contact_write_message")}
          />
          {textError ? (
            <span className="absolute bottom-[-30px] left-[0px] text-[#F44A77]">
              {textError}
            </span>
          ) : (
            ""
          )}
          <span
            className={`block bg-[#222221] rounded-[5px] px-[3px] leading-[20px]  absolute top-[114px] right-[13px] text-[15px] ${
              text.length > 255 ? "text-[#F44A77]" : ""
            }`}
          >
            {text.length} / 255
          </span>
        </label>
        <div className="flex justify-end mt-[10px]">
          <FooterButton
            onClick={validateForm}
            style="font-normal  font-man py-[12px] w-full smx:w-auto px-[20px] smx:px-[40px] bg-gradient-to-br from-[#ADA785] to-[#8D794C] rounded-[6px] leading-[19px] mt-[15px]"
          >
            <span className="w-[100%]">{t("contact_send_message")}</span>
          </FooterButton>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
