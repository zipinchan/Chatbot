import React from "react";

import Link from "./Link";

const GoogleLink = () => {
  const getUrl = () => {
    return `https://www.hpb.health.gov.lk/en/covid-19#:~:text=Delivery%20of%20medicine%20from%20hospital%20clinics`;
  };

  return (
    <Link url={getUrl()} title={"search on Google"} />
  );
};

export default GoogleLink;
