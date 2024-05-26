import clsx from "clsx";
import Link from "next/link";
import React from "react";

type MenuItem = {
  label: string;
  Icon: React.ElementType;
  className?: string;
};

const MenuItem = ({ label, Icon, className }: MenuItem): JSX.Element => {
  return (
    <div
      className={clsx(
        `group relative flex  flex-col lg:flex-row items-center justify-start gap-2 lg:gap-4  rounded-md lg:rounded-none overflow-visible  border-gray5 px-4 py-4  duration-300 ease-in-out text-gun-metal text-lg bg-white  lg:bg-main-light-grey`,
        className,
      )}
    >
      <span className="inline-block">
        <Icon className="h-6 w-6" />
      </span>
      <span
        className={clsx(
          "whitespace-nowrap transition duration-300 ease-in-out",
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default MenuItem;
