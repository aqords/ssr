import React from "react";
import { privacy } from "../Constants/Terms";
import Link from "next/link";

const Privacy = () => {
  return (
    <div>
      <h3 className="text-[38px] font-bold text-white mb-[30px]">
        Privacy Policy
      </h3>
      <p className="text-[24px] font-bold text-white mb-[50px]">
        At Aqords, we are committed to protecting your privacy and ensuring that
        your personal information is handled securely. This Privacy Policy
        explains how we collect, use, and safeguard information when you use our
        website, dashboard, and mobile application. By accessing or using
        Aqords, you agree to the terms outlined in this policy.
      </p>
      <ul className="">
        {privacy.map((item) => (
          <li className="mb-[30px]">
            <h4 className="text-[32px] font-bold text-white mb-[30px]">
              {item.title}
            </h4>
            {item.description && (
              <p className="font-man mb-[30px] text-[16px]">
                {item.description}{" "}
                {item.link && (
                  <Link
                    className="text-[#5682FA]  cursor-pointer"
                    href="mailto:support@aqords.com"
                  >
                    {item.link}
                  </Link>
                )}
              </p>
            )}
            <ul className="list-disc ml-[12px]">
              {item.category1 && (
                <li className="mb-[10px] text-[#838383]">
                  <p className="">{item.category1}</p>
                </li>
              )}
              {item.category2 && (
                <li className="mb-[10px] text-[#838383]">
                  <p className="">{item.category2}</p>
                </li>
              )}
              {item.category3 && (
                <li className="mb-[10px] text-[#838383]">
                  <p className="">{item.category3}</p>
                </li>
              )}
              {item.category4 && (
                <li className="mb-[10px] text-[#838383]">
                  <p className="">{item.category4}</p>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Privacy;
