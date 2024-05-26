"use client";

import clsx from "clsx";
import SpaceOverviewCard from "./space-overview-card";

import { useEffect } from "react";

import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";
import { useSpaceOverviewDataStore } from "@/stores/space-overview-data";

const SpaceOverview = () => {
  const { isLoading, isError, error, isSuccess, data, fetchSpaceOverview } =
    useSpaceOverviewDataStore((state) => state);

  const hasSpaceOverviewData =
    !isLoading && isSuccess && !isError && data !== null;

  useEffect(() => {
    fetchSpaceOverview();
  }, [fetchSpaceOverview]);

  if (isLoading) {
    return (
      <div className="h-screen w-full">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen w-full">
        <ErrorMessage message={(error as Error).toString() || ""} />
      </div>
    );
  }

  if (!hasSpaceOverviewData) {
    return <ErrorMessage message="No data found" />;
  }

  return (
    <div
      className={clsx(
        "relative grid w-full grid-cols-1 justify-center gap-8 pb-10 md:grid-cols-3 mt-6",
      )}
    >
      {data.entries.map((obj, index) => {
        return (
          <SpaceOverviewCard
            key={obj.id}
            id={obj.id}
            name={obj.name}
            address={obj.address}
            latitude={obj.latitude}
            longitude={obj.longitude}
            google_maps_url={obj.google_maps_url}
            city={obj.city}
            state={obj.state}
            country={obj.country}
            postal_code={obj.postal_code}
            description={obj.description}
            rules={obj.rules}
            amenities={obj.amenities}
            images={obj.images}
            working_hours_start={obj.working_hours_start}
            working_hours_end={obj.working_hours_end}
            contact_person_name={obj.contact_person_name}
            facilities={obj.facilities}
            is_active={obj.is_active}
            is_day_pass_enabled={obj.is_day_pass_enabled}
            day_pass_price={obj.day_pass_price}
            day_pass_discounts_percentage={obj.day_pass_discounts_percentage}
            manager_id={obj.manager_id}
            can_edit={obj.can_edit}
            type={obj.type}
          />
        );
      })}
    </div>
  );
};

export default SpaceOverview;
