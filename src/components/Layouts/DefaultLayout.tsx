import React from "react";

import Header from "@/components/header";
import Text from "@/components/common/Text";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden" id="main">
        <div className="no-scrollbar relative flex flex-1 flex-col overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="flex items-start bg-main-light-grey pb-20  lg:pb-2">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
          <div className="flex w-full justify-center items-center  bg-gun-metal py-4">
            <Text
              value="© Copyright 2024. Bhive Private Limited"
              className="text-xsm text-white"
            />
          </div>
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
