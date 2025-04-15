import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AIVA",
    template: "%s | AIVA - Your Marketplace for Bulk Products",
  },
  description:
    "AIVA - Your Ultimate Destination for Trendy Shopping! Explore a wide range of products, from fashion to electronics, all in one place. Enjoy seamless browsing, secure payments, and fast delivery. Shop smarter, shop happier with AIVA!",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "AIVA - Your Marketplace for Bulk Products",
    description:
      "AIVA - Your Ultimate Destination for Trendy Shopping! Explore a wide range of products, from fashion to electronics, all in one place. Enjoy seamless browsing, secure payments, and fast delivery. Shop smarter, shop happier with AIVA!",
    url: "https://www.aiva.com",
    siteName: "aiva",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AIVA - Your Marketplace for Bulk Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const getPageMetaData = (pageName: string) => {
  return {
    ...metadata,
    title: {
      default: pageName,
      template: "%s | AIVA - Your Marketplace for Bulk Products",
    },
  };
};
