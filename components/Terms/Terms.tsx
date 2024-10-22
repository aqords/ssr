import React from "react";
import { terms } from "../Constants/Terms";
import Link from "next/link";

const Terms = () => {
  return (
    <div>
      <h3 className="text-[38px] font-bold text-white mb-[30px]">
        Terms of Use
      </h3>
      <p className="text-[24px] font-bold text-white mb-[50px]">
        Welcome to Aqords! These Terms of Use govern your access to and use of
        the Aqords website, dashboard, and mobile application. By using Aqords,
        you agree to these terms. Please read them carefully.
      </p>
      <ul className="">
        {terms.map((item) => (
          <li className="mb-[30px]">
            <h4 className="text-[32px] font-bold text-white mb-[30px]">
              {item.title}
            </h4>
            {item.subtitle && (
              <h5 className="font-man block text-[18px]">{item.subtitle}</h5>
            )}
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
            </ul>

            {item.subdescription && (
              <p className="font-man text-[16px]">
                {item.subdescription}{" "}
                {
                  <Link
                    className="text-[#5682FA]  cursor-pointer"
                    href="/privacy-policy"
                  >
                    {item.redirect}
                  </Link>
                }
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Terms;
