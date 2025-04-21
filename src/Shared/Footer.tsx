import LinkedInIcon from "@/icons/LinkedInIcon";
import MailIcon from "@/icons/MailIcon";
import Button from "@/ui/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="custom_container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[0px]">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-[720px] gap-[40px] md:gap-[0px]">
            <button className="w-[232px] bg-[rgba(15,25,62,0.05)] gap-[10px] md:gap-[16px] md:w-[271px] h-[42px] text-[14px] font-semibold leading-[24px] md:leading-[30px] md:text-[16px] md:h-[54px] rounded-full flex items-center p-[10px] text-heading">
              <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full border border-heading flex justify-center items-center">
                <MailIcon className="w-[14px] md:w-[16px] h-[12px] md:h-[14px]" />
              </div>
              david.patten@warpme.io
            </button>
            <div className="hidden md:flex">
              <Button
                className="p-[13.33px]"
                buttonClassName="max-w-[198px] h-[58px]"
                iconClassName="w-[22.262px] h-[22.262px]"
              />
            </div>
            <div className="flex md:hidden">
              <Button className="w-9 h-9" buttonClassName="max-w-[185px]" />
            </div>
          </div>

          <button className="w-[121px] bg-[rgba(15,25,62,0.05)] gap-[10px] md:gap-[16px] md:w-[144px] h-[42px] text-[14px] font-semibold leading-[24px] md:leading-[30px] md:text-[16px] md:h-[54px] rounded-full flex items-center p-[10px] text-heading">
            <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full border border-heading flex justify-center items-center">
              <LinkedInIcon className="w-[12px] md:w-[14px] h-[12px] md:h-[14px]" />
            </div>
            LinkedIn
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center w-full gap-[8px] mt-[69px] md:mt-[60px]">
          <p className="text-[12px] md:text-[14px] font-general-sans leading-[20px] md:leading-[22px] text-heading">
            Privacy
          </p>
          <div className="bg-[rgba(15,25,62,0.40)] w-[4px] h-[4px] rounded-full" />
          <p className="text-[12px] md:text-[14px] font-general-sans leading-[20px] md:leading-[22px] text-heading">
            Terms
          </p>
        </div>

        {/*  footer images  */}
        <div className="mt-[30px] md:mt-[60px]">
          <div className="w-full h-full max-h-[337px] hidden md:flex">
            <Image
              src="/images/footer.png"
              width={1440}
              height={337}
              alt="footer bottom background image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full max-h-[260px] flex md:hidden">
            <Image
              src="/images/footer-mobile.png"
              width={700}
              height={260}
              alt="footer bottom background image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
