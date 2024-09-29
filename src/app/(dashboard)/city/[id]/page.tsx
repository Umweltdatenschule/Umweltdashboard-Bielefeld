import Airquality from "@/components/airQuality/AirQualitySection/Airquality";
import GreenvalueSection from "@/components/greenValues/GreenValuesSection/GreenvalueSection";
import Iframes from "@/components/Iframes/Iframes";
import PageInfo from "@/components/pageinfo/PageInfo";
import React from "react";

const Page = () => {
  return (
    <div>
      <PageInfo />
      <Airquality />
      <GreenvalueSection />
      <Iframes />
    </div>
  );
};

export default Page;
