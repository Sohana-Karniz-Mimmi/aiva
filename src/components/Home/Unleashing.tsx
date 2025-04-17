import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";

const Unleashing = () => {
  return (
    <section className="custom_container py-[60px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[66px] items-center">
        {/*  Content */}
        <div className="w-full lg:max-w-[609px]">
          <h2 className="w-full">
            Unleashing Gen AI for Unprecedented Cost Efficiency
          </h2>

          <div className="w-full pt-[20px] lg:pt-[30px] pb-[20px] lg:pb-[120px]">
            <p className=" md:mb-[22px] mb-[20px]">
              The McKinsey Research emphasizes the significant impact of
              Generation AI (Gen AI) on customer care, projecting potential
              productivity gains of 30% to 40% of current function costs.
              Companies employing Gen AI technologies, like virtual agents and
              chatbots, in customer-facing roles can drastically lower contact
              center operational expenses, thereby greatly enhancing their
              return on investment (ROI).
            </p>
            <p className="">
              Incorporating Gen AI into customer care strategies goes beyond
              adopting advanced technology; it revolutionizes the economics of
              customer service, offering unprecedented efficiency and financial
              advantages.
            </p>
          </div>

          {/* Button */}
          <Button
            className="p-[13.33px]"
            buttonClassName="max-w-[198px] h-[58px]"
            iconClassName="w-[22.262px] h-[22.262px]"
          />
        </div>

        {/*  Image */}
        <div className="w-full lg:w-auto">
          <div className="relative w-[343px] h-[301px] lg:w-[560px] lg:h-[580px] rounded-[20px] lg:rounded-[50px] overflow-hidden">
            <Image
              src="/images/genai.png"
              alt="Gen AI Illustration"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unleashing;
