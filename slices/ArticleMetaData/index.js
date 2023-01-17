import { usePrismicDocumentByUID } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ArticleMetaDataSlice} ArticleMetaDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleMetaDataSlice>} ArticleMetaDataProps
 * @param { ArticleMetaDataProps }
 */
const ArticleMetaData = ({ slice }) => {
  console.log("article meta data", slice);

  return <section>Hello</section>;
};

export default ArticleMetaData;
