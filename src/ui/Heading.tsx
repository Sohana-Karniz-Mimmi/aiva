import React from "react";

type HeadingVariant = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  children: React.ReactNode;
  variant?: HeadingVariant;
  className?: string;
};

const variantClasses: Record<HeadingVariant, string> = {
  h1: `text-[36px] leading-[44px] tracking-[0.54px]
       md:text-[45px] md:leading-[53px] md:tracking-[0.70px]
       lg:text-[50px] lg:leading-[58px] lg:tracking-[0.75px]`,

  h2: `text-[28px] leading-[36px] tracking-[0.42px]
       md:text-[38px] md:leading-[46px] md:tracking-[0.60px]
       lg:text-[44px] lg:leading-[52px] lg:tracking-[0.66px]`,

  h3: `text-[20px] leading-[28px] tracking-[0.42px]
       md:text-[32px] md:leading-[40px] md:tracking-[0.50px]
       lg:text-[38px] lg:leading-[46px] lg:tracking-[0.57px]`,

  h4: `text-[18px] leading-[26px] tracking-[0.27px]
       md:text-[22px] md:leading-[30px] md:tracking-[0.40px]
       lg:text-[26px] lg:leading-[34px] lg:tracking-[0.52px]`,
};

export default function Heading({
  children,
  variant = "h1",
  className = "",
}: HeadingProps) {
  const Tag: React.ElementType = variant;

  return (
    <Tag className={`${variantClasses[variant]} ${className}`}>{children}</Tag>
  );
}
