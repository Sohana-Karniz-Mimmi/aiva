import Image from "next/image";

const EncourageAction = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-[140px] md:pt-[174px] lg:pt-[208px] pb-[60px] md:pb-[80px] lg:pb-[102px]">
      <div className=" rounded-[20px] md:rounded-[60px] relative  ">
        <div className="w-full h-[650px] md:min-h-[632px] -mt-[80px] relative z-0">
          <Image
            src="/images/encourage-action-bg.png"
            width={1440}
            height={900}
            alt="gradient-bg"
            className="w-full h-full object-cover rounded-[20px] md:rounded-[60px]"
          />
        </div>

        <div className="absolute top-[60px] md:top-[100px] w-full">
          <div className="max-w-[1070px] w-full mx-auto z-10 px-[16px] md:px-[24px] xl:px-[0px]">
            <h2 className="text-center w-full md:w-[560px] mx-auto">
              Encourage Action. Elevate Your Experience.
            </h2>

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
        </div>
      </div>
    </section>
  );
};

export default EncourageAction;
