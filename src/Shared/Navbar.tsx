"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const navLinks = [
    { name: "The AILANA", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "How it Works", path: "/how-it-works" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Close menu when resizing to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Responsive breakpoints
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  return (
    <header className="custom_container">
      {/* Navbar for all screen sizes */}
      <nav className={`fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1240px] md:min-h-[60px] min-h-[52px] rounded-[50px] flex items-center justify-between md:pl-[22px] pl-[25px] md:pr-[8px] pr-[4px] ${
            isMenuOpen ? "bg-white" : "bg-white/60 backdrop-blur"
          }`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 86 14"
              fill="none"
              className="w-[85.117px] h-[12.516px]"
            >
              <path
                d="M81.3363 13.2934L80.2363 10.5912H73.7162L72.6162 13.2934H68.6562L74.2562 0.777832H79.6963L85.2962 13.2934H81.3363ZM79.2363 8.17339L77.6562 4.28005C77.4296 3.69931 77.3163 3.21931 77.3163 2.84005C77.3163 2.62672 77.2029 2.52006 76.9762 2.52006C76.7629 2.52006 76.6562 2.62672 76.6562 2.84005C76.6562 3.06524 76.6229 3.2845 76.5563 3.49783C76.5029 3.71117 76.4162 3.97191 76.2962 4.28005L74.7162 8.17339H79.2363Z"
                fill="black"
              />
              <path
                d="M58.5881 0.777832L64.1881 10.8045C64.2681 10.9467 64.3681 11.0178 64.4881 11.0178C64.6615 11.0178 64.7481 10.9467 64.7481 10.8045C64.7481 10.7215 64.7148 10.6089 64.6481 10.4667C64.5015 10.1941 64.3881 9.95117 64.3081 9.73783C64.2281 9.51265 64.1881 9.28746 64.1881 9.06228V0.777832H67.8681V13.2934H62.1081L56.5081 3.26672C56.4281 3.1245 56.3281 3.05339 56.2081 3.05339C56.0348 3.05339 55.9481 3.1245 55.9481 3.26672C55.9481 3.34968 55.9815 3.46228 56.0481 3.6045C56.1948 3.87709 56.3081 4.12598 56.3881 4.35117C56.4681 4.5645 56.5081 4.78376 56.5081 5.00894V13.2934H52.8281V0.777832H58.5881Z"
                fill="black"
              />
              <path
                d="M48.2308 13.2934L47.1308 10.5912H40.6108L39.5108 13.2934H35.5508L41.1508 0.777832H46.5908L52.1908 13.2934H48.2308ZM46.1308 8.17339L44.5508 4.28005C44.3241 3.69931 44.2108 3.21931 44.2108 2.84005C44.2108 2.62672 44.0974 2.52006 43.8708 2.52006C43.6574 2.52006 43.5508 2.62672 43.5508 2.84005C43.5508 3.06524 43.5174 3.2845 43.4508 3.49783C43.3974 3.71117 43.3108 3.97191 43.1908 4.28005L41.6108 8.17339H46.1308Z"
                fill="black"
              />
              <path
                d="M26.7425 0.777832V10.5912H34.9025V13.2934H23.0625V0.777832H26.7425Z"
                fill="black"
              />
              <path
                d="M17.4531 13.2934V0.777832H21.1331V13.2934H17.4531Z"
                fill="black"
              />
              <path
                d="M12.8597 13.2934L11.7597 10.5912H5.23969L4.13969 13.2934H0.179688L5.77969 0.777832H11.2197L16.8197 13.2934H12.8597ZM10.7597 8.17339L9.17969 4.28005C8.95302 3.69931 8.83969 3.21931 8.83969 2.84005C8.83969 2.62672 8.72635 2.52006 8.49969 2.52006C8.28635 2.52006 8.17969 2.62672 8.17969 2.84005C8.17969 3.06524 8.14635 3.2845 8.07969 3.49783C8.02635 3.71117 7.93969 3.97191 7.81969 4.28005L6.23969 8.17339H10.7597Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation (shows on tablet and desktop) */}
        {isDesktop && (
          <div className="flex items-center gap-6 md:gap-[30px]  h-8 justify-center ml-[54px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group text-[14px] font-medium leading-[22px] font-general ${
                  currentPath === link.path ? "text-heading" : "text-heading/80"
                }`}
              >
                {link.name}
                {(currentPath === link.path ||
                  (link.path === "/" && currentPath === "/")) && (
                  <ActiveLinkIndicator className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[60px]" />
                )}
                <div className="group-hover:block hidden absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[60px]">
                  <ActiveLinkIndicator className="w-full" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Button (shows on tablet and desktop) */}
        {isDesktop && <CTAButton />}

        {/* Mobile Menu Button (shows only on mobile) */}
        {(isTablet || isMobile) && (
          <button
            onClick={toggleMenu}
            className="flex w-[44px] h-[44px] p-[13px] items-center justify-center gap-[10px] rounded-[50px] bg-[#0F193E] backdrop-blur"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        )}
      </nav>

      {/* Mobile Menu Drawer (only on mobile) */}
      {(isTablet || isMobile) && (
        <div
          className={`fixed top-0 left-0 z-40 w-full h-full transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute top-[70px] right-[16px] w-[calc(100%-32px)] max-w-full rounded-[30px] bg-white backdrop-blur-lg p-[24px] flex flex-col gap-[40px] transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-[20px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={toggleMenu}
                  className={`relative group text-[20px] font-normal hover:text-primary transition-colors leading-[28px] text-heading`}
                >
                  {link.name}
                  {(currentPath === link.path ||
                    (link.path === "/" && currentPath === "/")) && (
                    <ActiveLinkIndicator />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Button */}
              <CTAButton />
          </div>
        </div>
      )}
    </header>
  );
};

// Reusable components remain the same as previous implementation
const ActiveLinkIndicator = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="2"
    viewBox="0 0 62 2"
    fill="none"
    className={className}
  >
    <path
      d="M1 1H61"
      stroke="url(#paint0_linear_2036_612)"
      stroke-linecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2036_612"
        x1="-13.8847"
        y1="-51.4991"
        x2="72.8509"
        y2="-46.6987"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#858BEC" />
        <stop offset="0.938229" stop-color="#7BD7FF" />
      </linearGradient>
    </defs>
  </svg>
);

const CTAButton = ({ className = "" }) => (
  <button className="inline-flex h-[44px] pl-[4px] pr-[16px] py-[16px] items-center gap-2 rounded-[100px] bg-primary hover:bg-primary-hover">
    <span className="flex w-9 h-9 p-[10px] justify-center items-center rounded-[60px] bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className={`w-[16.697px] h-[16.697px] ${className}`}
      >
        <g clipPath="url(#clip0_2036_633)">
          <path
            d="M13.5228 2.04277H13.175V1.69492C13.175 1.11818 12.7075 0.651367 12.1314 0.651367C11.5554 0.651367 11.0879 1.11818 11.0879 1.69492V2.04277H6.91366V1.69492C6.91366 1.11818 6.44615 0.651367 5.87011 0.651367C5.29406 0.651367 4.82655 1.11818 4.82655 1.69492V2.04277H4.4787C2.36934 2.04277 0.652344 3.75907 0.652344 5.86913V13.5218C0.652344 15.6319 2.36934 17.3482 4.4787 17.3482H13.5228C15.6322 17.3482 17.3492 15.6319 17.3492 13.5218V5.86913C17.3492 3.75907 15.6322 2.04277 13.5228 2.04277ZM13.5228 15.2611H4.4787C3.51933 15.2611 2.73945 14.4805 2.73945 13.5218V6.91268H15.2621V13.5218C15.2621 14.4805 14.4822 15.2611 13.5228 15.2611ZM7.60936 9.34764V10.739C7.60936 11.3151 7.14185 11.7826 6.56581 11.7826H5.1744C4.59836 11.7826 4.13085 11.3151 4.13085 10.739V9.34764C4.13085 8.7716 4.59836 8.30408 5.1744 8.30408H6.56581C7.14185 8.30408 7.60936 8.7716 7.60936 9.34764Z"
            fill="#634AB0"
          />
        </g>
        <defs>
          <clipPath id="clip0_2036_633">
            <rect
              width="16.6968"
              height="16.6968"
              fill="white"
              transform="translate(0.652344 0.651367)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
    Book your meeting
  </button>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M15.5 14H2.75C2.3375 14 2 14.3375 2 14.75C2 15.1625 2.3375 15.5 2.75 15.5H15.5C15.9125 15.5 16.25 15.1625 16.25 14.75C16.25 14.3375 15.9125 14 15.5 14ZM15.5 8H2.75C2.3375 8 2 8.3375 2 8.75C2 9.1625 2.3375 9.5 2.75 9.5H15.5C15.9125 9.5 16.25 9.1625 16.25 8.75C16.25 8.3375 15.9125 8 15.5 8Z"
      fill="white"
    />
    <path
      d="M2.73684 2C2.33158 2 2 2.3375 2 2.75C2 3.1625 2.33158 3.5 2.73684 3.5H15.2632C15.6684 3.5 16 3.1625 16 2.75C16 2.3375 15.6684 2 15.2632 2H2.73684Z"
      fill="white"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M16.8048 1.19519C16.6798 1.07021 16.5102 1 16.3335 1C16.1567 1 15.9871 1.07021 15.8621 1.19519L9 8.05732L2.13788 1.19519C2.01286 1.07021 1.84332 1 1.66654 1C1.48976 1 1.32022 1.07021 1.19519 1.19519C1.07021 1.32022 1 1.48976 1 1.66654C1 1.84332 1.07021 2.01286 1.19519 2.13788L8.05732 9L1.19519 15.8621C1.07021 15.9871 1 16.1567 1 16.3335C1 16.5102 1.07021 16.6798 1.19519 16.8048C1.32022 16.9298 1.48976 17 1.66654 17C1.84332 17 2.01286 16.9298 2.13788 16.8048L9 9.94268L15.8621 16.8048C15.9871 16.9298 16.1567 17 16.3335 17C16.5102 17 16.6798 16.9298 16.8048 16.8048C16.9298 16.6798 17 16.5102 17 16.3335C17 16.1567 16.9298 15.9871 16.8048 15.8621L9.94268 9L16.8048 2.13788C16.9298 2.01286 17 1.84332 17 1.66654C17 1.48976 16.9298 1.32022 16.8048 1.19519Z"
      fill="white"
    />
  </svg>
);

export default Navbar;
