import clsx from "clsx";

import Text from "@/components/common/Text";
import EventI from "~/svg/community_event.svg";
import GymI from "~/svg/gym.svg";
import WifiI from "~/svg/wifi.svg";
import CafeI from "~/svg/cafe.svg";
import RupeeI from "~/svg/rupee.svg";
import LoungeI from "~/svg/lounge.svg";
import TimerI from "~/svg/timer.svg";
import SportsI from "~/svg/sports.svg";
import HexagonI from "~/svg/hexagon.svg";
import HalfHexagonI from "~/svg/halfhexagon.svg";
import MenuItem from "./common/MenuItem";
import SpaceOverview from "./space-overview";
import Image from "next/image";

const WHY_CHOOSE_US_ITEMS = [
  {
    key: "community-events",
    label: "Community Events",
    icon: EventI,
  },
  {
    key: "gym-facilities",
    label: "Gym Facilities",
    icon: GymI,
  },
  {
    key: "high-speed-wiFi",
    label: "High-Speed WiFi",
    icon: WifiI,
  },
  {
    key: "cafe-tea-bar",
    label: "Cafe & Tea Bar",
    icon: CafeI,
  },

  {
    key: "affordable",
    label: "Affordable",
    icon: RupeeI,
  },

  {
    key: "comfort-lounges",
    label: "Comfort Lounges",
    icon: LoungeI,
  },
  {
    key: "quick-booking",
    label: "Quick Booking",
    icon: TimerI,
  },
  {
    key: "sports-area",
    label: "Sports Area",
    icon: SportsI,
  },
];

function HomeSections() {
  const classes = clsx("w-full h-full flex flex-col px-12", {
    justifyCenter: false,
  });
  return (
    <div className="flex flex-col">
      <div className="flex w-full  justify-between relative">
        <div className="hidden md:flex w-[70%] bg-[url('/dashboard/images/hivebackground.png')] bg-cover  bg-center relative h-[440px]  flex-col items-center justify-center opacity-75 ">
          <Text
            value="Host your meeting with"
            className="text-6xl text-gun-metal"
            fontFamily="medium"
          />
          <Text
            value=" world-class amenities."
            className="text-6xl text-gun-metal"
            fontFamily="medium"
          />
          <div className="absolute left-[23%] top-0">
            <HalfHexagonI className="w-30 h-30.5" />
          </div>
          <div className="flex">
            <Text
              value="Starting at"
              className="text-6xl text-gun-metal"
              fontFamily="medium"
            />
            <Text
              value="₹199/-!"
              className="text-6xl text-primary-yellow px-4"
              fontFamily="medium"
            />
          </div>
        </div>
        <div className="flex w-full  md:w-auto items-center justify-center xsm:justify-end">
          <div className="absolute right-0 top-0">
            <HexagonI className="w-100 h-100" />
          </div>
          <Image
            src="/dashboard/images/banner.png"
            width={330}
            height={338}
            alt="banner background"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center flex-col mt-2">
        <Text
          value="Host your meeting with world-class"
          className="text-xl text-gun-metal"
          fontFamily="medium"
        />
        <div>
          <Text
            value="amenities. Starting at"
            className="text-xl text-gun-metal"
            fontFamily="medium"
          />
          <Text
            value="₹199/-!"
            className="text-xl text-primary-yellow px-4"
            fontFamily="medium"
          />
        </div>
      </div>
      <div className={classes}>
        <div className="py-12">
          <Text
            value="Why Choose Us"
            className="text-3xl text-gun-metal"
            fontFamily="medium"
          />
          <ul className="mb-6 flex flex-wrap mt-8 gap-4 lg:gap-0">
            {WHY_CHOOSE_US_ITEMS.map((item) => (
              <li
                key={item.key}
                className="w-[48%] lg:w-[25%] justify-center items-center"
              >
                <MenuItem label={item.label} Icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="py-10">
          <Text
            value="Our Space Overview"
            className="text-3xl text-gun-metal"
            fontFamily="medium"
          />
          <SpaceOverview />
        </div>
        <div className="w-full py-10">
          <Text
            value="Download our app now"
            className="text-3xl text-gun-metal"
            fontFamily="medium"
          />
          <div className="flex w-full flex-col my-10 md:flex-row">
            <Image
              src="/dashboard/images/downloadapp.png"
              alt="Download app Image"
              height={469}
              width={400}
              objectFit="cover"
            />
            <div className="flex justify-around gap-4 md:hidden py-4">
              <Image
                src="/dashboard/images/googleplay.png"
                alt="Download app Image"
                width={146}
                height={45}
              />
              <Image
                src="/dashboard/images/appstore.png"
                alt="Download app Image"
                width={132}
                height={45}
              />
            </div>
            <div className="flex-col-reverse hidden md:flex">
              <div className="flex flex-col h-80 bg-white rounded-br-md rounded-t-md  justify-center opacity-100 gap-10">
                <Text
                  value="Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks."
                  className="text-xl text-gray4 lg:w-[50%] md:ml-[5%]  lg:ml-[20%]"
                />
                <div className="flex gap-4 md:ml-[5%]  lg:ml-[20%]">
                  <Image
                    src="/dashboard/images/googleplay.png"
                    alt="Download app Image"
                    width={146}
                    height={45}
                  />
                  <Image
                    src="/dashboard/images/appstore.png"
                    alt="Download app Image"
                    width={132}
                    height={45}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSections;
