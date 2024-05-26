"use client";

import clsx from "clsx";

import React from "react";

import Text from "@/components/common/Text";
import { ISpaceOverviewCard } from "@/interfaces/common";

import DirectionI from "~/svg/direction.svg";
import Platinum from "~/svg/platinum.svg";
import Campus from "~/svg/campus.svg";
import Workspace from "~/svg/workspace.svg";
import Honeykomb from "~/svg/honeykomb.svg";
import Premium from "~/svg/premium.svg";
import ArrowI from "~/svg/arrow.svg";
import Arrow1I from "~/svg/arrow1.svg";
import Arrow2I from "~/svg/arrow2.svg";
import Image from "next/image";

const getIconByType = (type: string) => {
  switch (type) {
    case "Workspace":
      return (
        <Workspace className="h-5 w-5 text-primary-yellow shadow-custom overflow-hidden bg-transparent" />
      );
    case "Platinum":
      return (
        <Platinum className="h-5 w-5 text-primary-yellow shadow-custom overflow-hidden bg-transparent" />
      );
    case "Campus":
      return (
        <Campus className="h-5 w-5 text-primary-yellow shadow-custom overflow-hidden bg-transparent" />
      );
    case "Honeykomb":
      return (
        <Honeykomb className="h-5 w-5 text-primary-yellow shadow-custom overflow-hidden bg-transparent" />
      );
    default:
      return null;
  }
};

const SpaceOverviewCard = ({
  id,
  name,
  address,
  latitude,
  longitude,
  google_maps_url,
  city,
  state,
  country,
  postal_code,
  description,
  rules,
  amenities,
  images,
  working_hours_start,
  working_hours_end,
  contact_person_name,
  facilities,
  is_active,
  is_day_pass_enabled,
  day_pass_price,
  day_pass_discounts_percentage,
  manager_id,
  can_edit,
  type,
}: ISpaceOverviewCard): JSX.Element => {
  return (
    <div className="group relative mt-2 cursor-pointer " onClick={() => {}}>
      <div
        className={clsx(
          "relative flex gap-4 rounded-lg bg-white p-3 shadow-4 transition-all duration-300 flex-col",
        )}
      >
        <div className="flex w-full justify-between items-center">
          <Text
            value={name}
            className="text-xl text-gun-metal w-[60%]"
            fontFamily="medium"
          />
          <div className="flex  flex-col h-13 w-13 rounded-md bg-main-light-grey justify-center items-center gap-1">
            <DirectionI className="h-4.5 w-4.5" />
            <Text value={"6kms"} className="text-xxs text-gray4" />
          </div>
        </div>
        <div className="flex relative h-50">
          <Image
            src={`/dashboard/${images[0]}`}
            alt="Space image Image"
            fill
            className="rounded-md"
            objectFit="cover"
          />
          <div className="flex justify-center items-center p-2 bg-custom-gradient rounded-md absolute top-4 left-2 gap-2 shadow-custom-2">
            {getIconByType(type)}
            <Text
              value={type}
              className="text-sm text-primary-yellow shadow-custom"
              fontFamily="medium"
            />
          </div>
        </div>
        <div className="flex w-full  justify-between">
          <div className="pt-3 w-[45%]">
            <div className="flex  justify-between  bg-main-light-grey p-4 rounded-md">
              <div className="flex flex-col gap-1">
                <Text
                  value={"Day Pass"}
                  className="text-sm text-gray4"
                  fontFamily="medium"
                />
                <div className="flex justify-center">
                  <Text
                    value={"₹ 249"}
                    className="text-xl text-gun-metal"
                    fontFamily="medium"
                  />
                  <Text value={"/Day"} className="text-xxs text-gray4 mt-2.5" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <ArrowI className="w-2 h-3" />
                <Arrow1I className="w-2 h-3" />
                <Arrow2I className="w-2 h-3" />
              </div>
            </div>
          </div>
          <div className="relative w-[45%] pt-3">
            <div className="flex justify-center items-center px-3 py-2 bg-gun-metal rounded-md absolute top-0 left-[35%] sm:left-[40%] md:left-[20%] lg:left-[30%]">
              <Text
                value={"20% Discount"}
                className="text-xxs text-white"
                fontFamily="medium"
              />
            </div>
            <div className="flex   justify-between w-[100%] bg-light-yellow p-4 rounded-md">
              <div className="flex flex-col gap-1">
                <Text
                  value={"Bulk Pass"}
                  className="text-sm text-dark-grayish-olive"
                  fontFamily="medium"
                />
                <div className="flex justify-center">
                  <Text
                    value={"₹ 2400"}
                    className="text-xl text-gun-metal"
                    fontFamily="medium"
                  />
                  <Text
                    value={"/Day"}
                    className="text-xxs text-dark-grayish-olive mt-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-start items-center">
                <ArrowI className="w-2 h-3" />
                <Arrow1I className="w-2 h-3" />
                <Arrow2I className="w-2 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpaceOverviewCard);
