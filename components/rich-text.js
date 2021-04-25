import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const RichText = ({ text }) => {
  const htmlText = documentToHtmlString(text);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlText,
      }}
    ></div>
  );
};

export default RichText;
