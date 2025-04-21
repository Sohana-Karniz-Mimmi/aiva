"use client";
import { ActiveLinkIndicator } from "@/icons/activeLinkIndicator";
import { CloseIcon } from "@/icons/closeIcon";
import { Logo } from "@/icons/logo";
import { MenuIcon } from "@/icons/menuIcon";
import Button from "@/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

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

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  return (
    <header className="custom_container">
      <nav
        className={`fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1240px] md:min-h-[60px] min-h-[52px] rounded-[50px] flex items-center justify-between md:pl-[22px] pl-[25px] md:pr-[8px] pr-[4px] ${
          isMenuOpen ? "bg-white" : "bg-white/60 backdrop-blur"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {isDesktop && (
          <div className="flex items-center gap-6 md:gap-[30px]  h-8 justify-center xl:ml-[68px]">
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

        {isDesktop && (
          <Button className=" w-9 h-9" buttonClassName="max-w-[185px]" />
        )}

        {(isTablet || isMobile) && (
          <button
            onClick={toggleMenu}
            className="flex w-[44px] h-[44px] p-[13px] items-center justify-center gap-[10px] rounded-[50px] bg-heading backdrop-blur"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        )}
      </nav>

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

            <Button className=" w-9 h-9" buttonClassName="max-w-[185px]" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
