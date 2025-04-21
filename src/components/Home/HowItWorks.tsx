import { Meet } from "@/icons/meet";
import React from "react";

const HowItWork = () => {
  return (
    <section className="custom_container">
      <div className="flex items-center justify-center gap-[5px] xl:mt-[18px] xl:ml-[3px]">
        <Meet />
        <span className="text-[14px] md:text-[16px] font-general font-semibold leading-[22px] md:leading-[24px] text-heading">
        How it works?
        </span>
      </div>
      
    </section>
  );
};

export default HowItWork;
