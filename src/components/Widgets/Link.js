
import React from "react";

import { ReactComponent as UrlIcon } from "../../../../Chatbot/src/components/icons/link.svg";

import "../../../../Chatbot/src/components/Widgets/Link.css";

const Link = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="url-link"
    >
      <UrlIcon className="url-icon" />
      <h1 className="url-header">Click me to {title}</h1>
    </a>
  );
};

export default Link;




