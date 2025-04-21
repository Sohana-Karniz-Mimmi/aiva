import React from "react";
import Image from "next/image";

const EncourageAction = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[650px] md:min-h-[632px] overflow-hidden md:rounded-[60px] rounded-[20px] md:mt-[113px] mt-[60px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/encourage-action-bg.png"
          alt="AILANA Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center md:justify-center text-center">
        <h1 className="text-[28px] md:text-[44px] font-polySans font-bold leading-[36px] tracking-[0.42px] md:tracking-[0.66px] md:leading-[52px]  text-center text-senary">
          Encourage <br className="flex md:hidden" /> Action.{" "}
          <br className="hidden md:flex" />
          Elevate <br className="flex md:hidden" /> Your Experience.
        </h1>

        <p className="w-full sm:max-w-[500px] md:max-w-[760px] mx-auto text-center font-general-sans text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] mt-[20px] md:mt-[34px]">
          Ready to witness the power of our AILANA{" "}
          <br className="flex sm:hidden" /> (AI Virtual Agent) in action?
        </p>

        <div className="hidden md:flex justify-center mt-[108px] relative">
          <div className="w-[400px] lg:w-[460px] h-[38px] rounded-full bg-accent-yellow flex justify-center items-center absolute p-[8px] top-0 -mt-[19px]">
            <span className="text-[12px] lg:text-[14px] font-general font-semibold leading-[22px] text-heading">
              Call AILANA now to experience next-gen customer engagement
            </span>
          </div>

          <button className="w-[525px] lg:w-[626px] h-[130px] px-[43px] py-[38px] flex justify-center items-center text-[34px] lg:text-[44px] !font-polySans font-bold leading-[45px] lg:leading-[52px] tracking-[0.66px] rounded-[170px] bg-white shadow-[0px_4px_13px_0px_rgba(70,111,255,0.15)] text-heading">
            +1 888 502 5576
          </button>
        </div>

        <div className="flex md:hidden justify-center mt-[64px] relative">
          <div className="text-[12px] font-general-sans font-semibold leading-[20px] w-[120px] h-[36px] rounded-full bg-quinary flex justify-center items-center absolute p-[8px] top-0">
            Call AILANA now
          </div>

          <div className="mt-[42.4px]">
            <button className="w-[240px] h-[240px] p-[11.16px] rounded-full">
              <Image
                src="/images/encourage-action-call.png"
                width={240}
                height={240}
                alt="call-button"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncourageAction;
