import Airquality from "@/components/airQuality/AirQualitySection/Airquality";
import GreenvalueSection from "@/components/greenValues/GreenValuesSection/GreenvalueSection";
import PageInfo from "@/components/pageinfo/PageInfo";
import React from "react";

const Page = () => {
  return (
    <div>
      <PageInfo />
      <Airquality />
      <GreenvalueSection />
    </div>
  );
};

export default Page;
