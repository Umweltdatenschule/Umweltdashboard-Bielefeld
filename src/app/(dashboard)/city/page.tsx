import Cities from "@/components/cityes/Cities";
import React, { useEffect, useState } from "react";
import cities from "../../../config/cities.json";
import { ICity } from "@/components/city/City";

interface IResponse {
  error: boolean;
  msg: string;
  data: string[];
}

const page = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cities city={cities.cities} />
      </div>
    </>
  );
};

export default page;
