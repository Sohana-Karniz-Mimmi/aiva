import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[900px] overflow-hidden rounded-b-[60px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="AILANA Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[16px] xl:mb-[42px]">
        {/* Title */}
        <h1 className="max-w-[1070px] mb-[30px]">
          Empower Your Business with AILANA: Your 24/7 Multilingual Ally
        </h1>

        {/* Subtitle */}
        <p className="max-w-[760px] mb-[79px]">
          Meet AILANA, your AI Virtual Agent fluent in both English and Spanish,
          ready to be your all-star employee. With AILANA by your side, customer
          needs are understood and issues swiftly resolved, boosting revenues
          and cutting costs without the need for sick days.
        </p>

        {/* Button with Badge */}
        <div className="relative">
          {/* Main Button */}
          <button className="flex w-[626px] max-w-full h-[130px] px-[43px] py-[38px] justify-center items-center gap-[10px] bg-white rounded-[170px] shadow-[0px_4px_13px_0px_rgba(70,111,255,0.15)] hover:shadow-lg transition-all">
            <h2>+1 888 502 5576</h2>
          </button>

          {/* Top Badge */}
          <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 flex w-[460px] max-w-full p-[8px] justify-center items-center font-general bg-[#FAFF00] rounded-[160px]">
            <span className="text-[14px] font-semibold leading-[22px] text-heading">
              Call AILANA now to experience next-gen customer engagement
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
