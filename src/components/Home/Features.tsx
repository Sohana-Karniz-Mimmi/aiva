"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDesktop,
  ArrowMobile,
  DividerDesktop,
  DividerMobile,
} from "@/icons/FeaturesIcons";

const Features = () => {
 const [activeFeature, setActiveFeature] = useState<string | null>(
    "Speech Recognition"
  );

  const features = [
    {
      title: "Speech Recognition",
      description:
        "Utilizes machine learning to convert spoken words to text, adapting to accents and dialects for improved clarity.",
      image: "/images/speech.png",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Seamless Integrations",
      description:
        "Connects effortlessly with your existing CRM and business tools for unified operations.",
      image: "/images/seamless-integrations.svg",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Contextual Awareness",
      description:
        "Understands conversation context to provide relevant responses and follow-ups.",
      image: "/images/contextual-awareness.svg",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Voice Synthesis",
      description:
        "Generates natural-sounding speech that matches human conversation patterns.",
      image: "/images/speech.png",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Smart Call Routing",
      description:
        "Directs calls to the most appropriate agent or department based on caller needs.",
      image: "/images/seamless-integrations.svg",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Conversation Logs",
      description:
        "Maintains detailed records of all interactions for quality assurance and training.",
      image: "/images/contextual-awareness.svg",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Real-Time Response",
      description:
        "Provides instantaneous answers without perceptible delays in conversation.",
      image: "/images/speech.png",
      mobileImage: "/images/speechseamless-integrations.svg-mobile.png",
    },
    {
      title: "Automated Post-Call Actions",
      description:
        "Executes follow-up tasks automatically based on call outcomes.",
      image: "/images/contextual-awareness.svg",
      mobileImage: "/images/speech-mobile.png",
    },
    {
      title: "Enterprise Scheduling",
      description:
        "Manages complex appointment systems across multiple locations and timezones.",
      image: "/images/seamless-integrations.svg",
      mobileImage: "/images/speech-mobile.png",
    },
  ];

  const toggleFeature = (title: string) => {
    setActiveFeature(activeFeature === title ? null : title);
  };

  return (
    <section className="relative max-w-[1440px] mx-auto">
      {/* Background Image */}
      <div className="relative w-full h-[1197px] lg:h-[1026px] overflow-hidden rounded-[20px] lg:rounded-[60px]">
        <Image
          src="/images/speech-bg.png"
          alt="Speech Recognition Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0">
        <div className="custom_container py-[60px] lg:py-[100px]">
          {/* Title */}
          <h2 className="text-center mb-[44px] lg:mb-[60px]">Features</h2>

          {/* main Content */}
          <div className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[156px]">
            {/* Content */}
            <div className="w-full lg:w-[484px] lg:mt-[2px]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center cursor-pointer mb-[40px] "
                  onClick={() => toggleFeature(feature.title)}
                >
                  {/* Divider */}
                  {activeFeature === feature.title && (
                    <>
                      <div className="hidden lg:block ">
                        <DividerDesktop />
                      </div>
                      <div className="lg:hidden">
                        <DividerMobile />
                      </div>
                    </>
                  )}

                  <div className="flex-1 ml-[20px]">
                    <div className="flex justify-between md:justify-start items-center gap-[18px] py-[4px]">
                      <p
                        className={`text-[20px] lg:text-[26px] leading-[28px] lg:leading-[34px] font-general  ${
                          activeFeature === feature.title
                            ? "font-semibold !text-[#0F193E]"
                            : "font-normal text-[rgba(15,25,62,0.80)]"
                        }`}
                      >
                        {feature.title}
                      </p>
                      {activeFeature === feature.title && (
                        <>
                          <div className="hidden lg:block">
                            <ArrowDesktop />
                          </div>
                          <div className="lg:hidden">
                            <ArrowMobile />
                          </div>
                        </>
                      )}
                    </div>

                    {activeFeature === feature.title && (
                      <>
                        <p className="mt-[12px] md:mt-[20px] text-[#0F193E]">
                          {feature.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="w-full lg:w-auto">
              <div className="relative w-full h-[343px] lg:h-[600px] rounded-[16px] lg:rounded-[50px] overflow-hidden">
                {activeFeature ? (
                  <>
                    <div className="hidden lg:block">
                      <Image
                        src={
                          features.find((f) => f.title === activeFeature)
                            ?.image || "/images/default.png"
                        }
                        alt={`${activeFeature} Feature`}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:hidden">
                      <Image
                        src={
                          features.find((f) => f.title === activeFeature)
                            ?.mobileImage || "/images/default-mobile.png"
                        }
                        alt={`${activeFeature} Feature`}
                        width={343}
                        height={343}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block">
                      <Image
                        src="/images/default.png"
                        alt="AI Features"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:hidden">
                      <Image
                        src="/images/default-mobile.png"
                        alt="AI Features"
                        width={343}
                        height={343}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
