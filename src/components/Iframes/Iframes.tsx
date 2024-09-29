import React from "react";
import Section from "../Section/Section";

const Iframes = () => {
  return (
    <div>
      <Section style={{ width: "100%" }}>
        <h3>Gewässergüte-Messpunkte Bielefeld</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            title='Gewässergüte-Messpunkte Bielefeld'
            aria-label='Karte'
            id='datawrapper-chart-lTC2c'
            src='https://datawrapper.dwcdn.net/lTC2c/2/'
            style={{ border: "none", width: "900px", height: "777px" }}
            data-external='1'
          />
        </div>
      </Section>
    </div>
  );
};

export default Iframes;
