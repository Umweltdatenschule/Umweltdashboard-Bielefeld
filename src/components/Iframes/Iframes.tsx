import React from "react";
import Section from "../../ui/Section/Section";

const Iframes = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Section>
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
        <iframe title='' id='' src='https://datawrapper.dwcdn.net/Hhma7/1/' />
      </Section>
    </div>
  );
};

export default Iframes;
