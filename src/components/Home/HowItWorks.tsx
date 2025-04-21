import { Meet } from "@/icons/meet";
import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <section className="custom_container">
      <div className="flex items-center justify-center gap-[5px]">
        <Meet />
        <span className="text-[14px] md:text-[16px] font-general font-semibold leading-[22px] md:leading-[24px] text-heading">
          How it works?
        </span>
      </div>

      <h2 className="max-w-[976px] mx-auto mt-[14px] md:mt-[30px] text-left md:text-center">
        Seamless Integration for Enhanced Customer Engagement
      </h2>

      <div className="max-w-[1240px] mx-auto pt-[40px] md:pt-[60px]">
        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row md:justify-between gap-[30px] md:gap-[63px] border-b border-[rgba(15,25,62,0.20)] pb-[30px] md:pb-[40px] mb-[30px] md:mb-[40px]">
          <div className="flex gap-[20px] md:gap-[30px]">
            <div className="w-[48px] md:w-[100px] h-[48px] md:h-[100px]">
              <Image
                src="/images/how-it-works1.png"
                width={100}
                height={100}
                alt="step-1"
                className="w-full h-full rounded-[10px] md:rounded-[20px]"
              />
            </div>
            <h4 className="md:mt-[9px]">
              Onboarding <br />
              New Business Customers
            </h4>
          </div>
          <p className="text-[rgba(15,25,62,0.80)] md:mt-[9px] w-full md:max-w-[610px]">
            <span className="font-semibold text-heading">User Mapping:</span>{" "}
            {`A new
              business customer can be onboarded quickly using the customer's
              existing infrastructure. The setup of AILANA (AI Virtual Agent)
              typically takes one day, which involves mapping the customer's
              employee contact information, including telephone numbers,
              extensions, departments, and e-mail addresses.`}
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row md:justify-between gap-[30px] md:gap-[63px] border-b border-[rgba(15,25,62,0.20)] pb-[30px] md:pb-[40px] mb-[30px] md:mb-[40px]">
          <div className="flex gap-[20px] md:gap-[30px] md:mt-[10px]">
            <div className="shadow-[4px_-4px_0px_0px_#C1C5FF] bg-secondary w-[48px] md:w-[100px] h-[48px] md:h-[100px] rounded-[10px] md:rounded-[20px]">
              <Image
                src="/images/how-it-works2.png"
                width={100}
                height={100}
                alt="step-2"
                className="w-full h-full rounded-[10px] md:rounded-[20px]"
              />
            </div>
            <h4 className="md:mt-[18px]">
              Optional <br />
              Advanced Functionalities
            </h4>
          </div>
          <p className="text-[rgba(15,25,62,0.80)] md:mt-[2px] w-full md:max-w-[610px]">
            <span className="font-semibold text-heading">
              Calendar Scheduling and CRM Integration:
            </span>{" "}
            For businesses seeking advanced features, an implementation process
            is initiated to seamlessly integrate calendar scheduling and CRM
            functionalities. This ensures a tailored, comprehensive solution
            that aligns with the specific needs of the business, maximizing the
            benefits of the AI Virtual Agent.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row md:justify-between gap-[30px] md:gap-[63px]">
          <div className="flex gap-[20px] md:gap-[30px] items-center">
            <div className="w-[48px] md:w-[100px] h-[48px] md:h-[100px]">
              <Image
                src="/images/how-it-works3.png"
                width={100}
                height={100}
                alt="step-3"
                className="w-full h-full rounded-[10px] md:rounded-[20px]"
              />
            </div>
            <h4 className="md:mt-[9px]">
              Aggressive Promotion <br />
              {`of AILANA’s Phone Number`}
            </h4>
          </div>
          <p className="text-[rgba(15,25,62,0.80)] w-full md:max-w-[610px]">
            <span className="font-semibold text-heading">
              Strategic Display:
            </span>{" "}
            {`The
              company's website should prominently feature the AILANA (AI
              Virtual Agent) phone number. By making this strategic move,
              customers will be able to easily access and call the number,
              initiating seamless interactions with AILANA (AI Virtual Agent).`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
