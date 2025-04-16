import { Meet } from "@/icons/meet";
import React from "react";
import RevolutionizeCards from "./RevolutionizeCards";

const Revolutionize = () => {
  return (
    <section className="custom_container py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-0 items-start">
        <div className="flex items-center gap-[5px] xl:mt-[18px] xl:ml-[3px]">
          <Meet />
          <span className="text-[14px] md:text-[16px] font-general font-semibold leading-[22px] md:leading-[24px] text-heading">
            Meet AILANA
          </span>
        </div>

        {/* Title */}
        <div className="w-full xl:max-w-[820px] max-w-[650px]">
          <h2 className="w-full mb-[20px] md:mb-[30px]">
            Revolutionize Customer Engagement{" "}
            <span className="text-secondary">with ALIANA</span> an advanced AI
            Virtual Agent
          </h2>
          <p className="w-full">
            Our product is more than just a solution—it's an intelligent AI
            Virtual Agent set to transform customer experiences by replacing
            outdated IVR systems. Say goodbye to the status quo and usher in a
            new era of customer interactions.
          </p>
        </div>
      </div>
      <RevolutionizeCards />
    </section>
  );
};

export default Revolutionize;
