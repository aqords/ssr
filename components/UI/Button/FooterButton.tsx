import { useTranslation } from "next-i18next";

const FooterButton = () => {
  const { t } = useTranslation();
  return (
    <button
      className="font-normal  font-cyr py-[12px] px-[20px] smx:px-[40px] bg-gradient-to-br from-[#ADA785] to-[#8D794C]
] rounded-[6px] leading-[19px]"
      type="submit"
    >
      {t("Subscribe")}
    </button>
  );
};

export default FooterButton;
