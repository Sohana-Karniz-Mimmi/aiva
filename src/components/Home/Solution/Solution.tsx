import React from "react";
import Image from "next/image";
import SolutionSlider from "./SolutionSlider";

const Solution = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[649px] lg:h-[859px] overflow-hidden rounded-[20px] lg:rounded-[60px]">
        <Image
          src="/images/solution.png"
          alt="Solution Background"
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 375px, 1440px"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-[60px] lg:py-[100px]">
        <div className="custom_container">
          {/* Title */}
          <h2 className=" max-w-full lg:max-w-[925px] ">
            Unmatched Advantages: <br />
            Why Our Solution Stands Out
          </h2>
        </div>
        <SolutionSlider />
      </div>
    </section>
  );
};

export default Solution;
