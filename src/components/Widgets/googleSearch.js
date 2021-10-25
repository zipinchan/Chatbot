// import React from "react";

// import Link from "./Link";

// const GoogleLink = () => {
//   const getUrl = () => {
//     return `https://www.google.com/search?q=${userInput}`;
//   };

//   return (
//     <Link url={getUrl()} title={"search on Google"} />
//   );
// };

import React from "react";

import Link from "./Link";

const GoogleLink = ({userInput}) => {
  const getUrl = () => {
    return `https://www.google.com/search?q=${userInput}`;
   
  };

  return <Link url={getUrl()} title={"book parking on Avinor.no"} />;
};



export default GoogleLink;
