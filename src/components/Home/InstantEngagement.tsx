"use client";
import { contentList } from "@/mock/InstantEngagement";
import Button from "@/ui/Button";
import Image from "next/image";
import { useState } from "react";

const InstantEngagement = () => {
  const [selectedKey, setSelectedKey] = useState("verticals");
  const selectedContent = contentList.find((item) => item.key === selectedKey) || contentList[0];

  return (
    <section className="bg-background max-w-[1440px] mx-auto py-[60px] md:py-[80px] lg:py-[120px] px-4 md:px-6 xl:px-0 relative">
      <h1 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[52px] font-polySans font-bold tracking-[0.42px] md:tracking-[0.66px] text-center max-w-[976px] mx-auto mb-[20px] md:mb-[30px]">
        Instant Engagement Across Industries
      </h1>
      <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-general-sans text-center max-w-[814px] mx-auto mb-[30px] md:mb-[40px]">
        Experience seamless customer engagement across various industries like
        mortgage, insurance, banking, auto sales, and real estate with our
        voice-based AI Virtual Agent.
      </p>

      {/* Tab Navigation */}
      <div className="max-w-[1240px] mx-auto">
        <div className="overflow-x-auto rounded-[20px]">
          <div className="flex min-w-[1240px] items-center gap-[35px] h-[80px] md:h-[90px] bg-[rgba(70,111,255,0.05)] rounded-[20px] p-[6px] md:p-[10px]">
            {contentList.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`text-start md:text-center text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] font-general-sans text-heading flex justify-center items-center w-[163px] md:w-full ${
                  selectedKey === key
                    ? "md:min-w-[328px] h-[68px] md:h-[70px] p-[12px] md:p-[21px] rounded-[14px] md:rounded-[10px] shadow-[0px_0px_14px_0px_rgba(15,25,62,0.08)] bg-white font-semibold md:text-[16px]"
                    : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-[20px] md:mt-[40px] flex flex-col lg:flex-row gap-[20px] md:gap-[65px] relative">
          {/* Image */}
          <div className="w-full lg:max-w-[565px]">
            <div className="hidden sm:flex w-full h-full lg:max-h-[502px]">
              <Image
                src={selectedContent.img.desktop}
                width={565}
                height={502}
                alt="industry visual"
                className="w-full h-full rounded-[50px]"
              />
            </div>
            <div className="sm:hidden flex w-full h-full">
              <Image
                src={selectedContent.img.mobile}
                width={565}
                height={502}
                alt="industry visual"
                className="w-full h-full rounded-[20px]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:max-w-[610px]">
            <h2 className="text-[28px] md:text-[38px] font-polySans font-bold leading-[36px] md:leading-[46px] tracking-[0.42px] md:tracking-[0.57px]">
              {selectedContent.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            {selectedContent.details.map((text, i) => (
              <p
                key={i}
                className={`${
                  i === 0 ? "mt-[20px] md:mt-[40px]" : "mt-[20px] md:mt-[24px]"
                } text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-general-sans text-[rgba(15,25,62,0.80)]`}
              >
                {text}
              </p>
            ))}

            <div className="lg:absolute lg:bottom-0 mt-[20px] md:mt-[95px]">
              <div className="hidden md:flex">
                <Button
                  className="p-[13.33px]"
                  buttonClassName="max-w-[198px] h-[58px]"
                  iconClassName="w-[22.262px] h-[22.262px]"
                />
              </div>
              <div className="flex md:hidden">
                <Button className="w-9 h-9" buttonClassName="max-w-[185px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantEngagement;
