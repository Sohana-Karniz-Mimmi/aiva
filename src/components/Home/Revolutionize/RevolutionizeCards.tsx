import React from "react";
import Image from "next/image";

const RevolutionizeCards = () => {
  const cards = [
    {
      img: "/images/meet1.png",
      text: (
        <>
          <span className="text-heading font-semibold">
            Efficiently tackle customer issues with an intelligent assistant
            that excels in resolving common problems—
          </span>
          <span className="text-heading/80">
            minimizing wait times and freeing up your team to handle more
            complex challenges.
          </span>
        </>
      ),
    },
    {
      img: "/images/meet2.png",
      text: (
        <>
          <span className="text-heading font-semibold">
            Immediate Transfers to Human Resources
          </span>
          <span className="text-heading/80">
            {" "}
            When necessary, AILANA seamlessly connects customers with a
            dedicated human resources team, ensuring an unparalleled customer
            experience.
          </span>
        </>
      ),
    },
    {
      img: "/images/meet3.png",
      text: (
        <>
          <span className="text-heading font-semibold">
            Unlock Rapid ROI and Effortless Onboarding with AILANA—
          </span>
          <span className="text-heading/80">
            AILANA works with your existing infrastructure and onboarding only
            takes a few days. ROI occurs almost immediately.
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="mt-[40px] lg:mt-[60px] flex flex-col md:flex-row gap-[20px] xl:justify-center flex-wrap">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] lg:w-[400px] h-[358px] lg:h-[459px] md:h-[380px] p-[12] pb-[14px] lg:p-[14px] lg:pb-[50px] rounded-[20px] md:rounded-[50px] bg-[rgba(70,111,255,0.05)]"
        >
          <div className="relative rounded-[12px] lg:rounded-[36px] overflow-hidden mb-[12px] lg:mb-[30px] w-full h-[245px] lg:w-[372px] lg:h-[245px]">
            <Image
              src={card.img}
              alt={`Feature ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="lg:px-[7px] w-full lg:max-w-[358px]">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RevolutionizeCards;
