import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

import "@/styles/globals.css";

import DefaultLayout from "@/components/layouts/DefaultLayout";

import { inter, poppins } from "@/app/fonts";
import { siteConfig } from "@/constants/config";

const Provider = dynamic(() => import("@/providers"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body
        suppressHydrationWarning={true}
        className="m-auto max-w-screen-3xl bg-zircon shadow-xl"
      >
        <Provider>
          <DefaultLayout>{children}</DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
