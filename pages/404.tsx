import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import FooterAbout from "../components/About/FooterAbout";
import CompanyIcon from "../components/Icons/CompanyIcon";
import CustomsIcon from "../components/Icons/CustomsIcon";
import SleepIcon from "../components/Icons/SleepIcon";
import FooterVZbore from "../components/Search/components/SearchAsideBlock";
import LogoAndText from "../components/ui-kit/LogoAndText";
import PrimaryButton from "../components/ui-kit/PrimaryButton";
import getServerSideTranslations from "../utils/getServerSideTranslations";

export default function Error() {
  const { t } = useTranslation();
  return (
    <div className="md:bg-[#F8F9FB] h-full md:h-screen">
      <main className="md:container h-full md:h-screen flex flex-col ">
        <div className="gap-[80px] md:gap-0 justify-center h-screen md:h-max md:min-w-[530px] md:mx-auto md:mt-[20vh] md:shadow-error flex flex-col  md:items-stretch md:justify-start md:border md:border-gray-2 md:rounded-[10px]">
          <div className="md:border-b border-b-gray-2">
            <div className="p-[15px]">
              <LogoAndText isHiddenText />
            </div>
          </div>
          <div className="mx-auto md:px-[40px] pt-[40px] pb-[80px] flex flex-col">
            <span className="px-[20px] md:px-0 mb-[60px]">
              <SleepIcon />
            </span>
            <p className="px-[20px] md:px-0 mb-[15px font-[600] text-[22px]">
              {t("oops")}{" "}
              <span className="mb-[80px] font-bold">{t("cod")}</span>
            </p>
            <p className="px-[20px] md:px-0 text-pewter-gray  text-[14px] font-[600]">
              {t("error")}
            </p>
            <div className="px-[20px] md:px-0 flex gap-[40px] my-[40px]">
              <Link
                className="flex gap-[10px] items-center text-[#1C1BA8] hover:text-[#1C1BA8]/80 text-[14px] font-[600]"
                href={"/archive/customs"}
              >
                <CustomsIcon />
                {t("customs_archive")}
              </Link>
              <Link
                className="flex gap-[10px] items-center text-[#1C1BA8] hover:text-[#1C1BA8]/80 text-[14px] font-[600]"
                href={"/archive"}
              >
                <CompanyIcon />
                {t("companies_archive")}
              </Link>
            </div>
            <Link
              className={`ml-[20px] md:ml-0 md:self-start w-max px-[35px] md:px-[50px] py-[12px] bg-purple text-white 
             rounded-[6px] hover:bg-[#7D4AD0] duration-300 `}
              href={"/"}
            >
              {t("g_to")}
            </Link>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 w-full hidden md:block">
        <FooterAbout link="/" text={"g_to"} />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
}
