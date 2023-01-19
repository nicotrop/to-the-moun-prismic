import { PrismicNextImage } from "@prismicio/next";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ArticleMetaDataSlice} ArticleMetaDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleMetaDataSlice>} ArticleMetaDataProps
 * @param { ArticleMetaDataProps }
 */
const ArticleMetaData = ({ slice, context }) => {
  const { data: auteur } = slice.primary.auteur;

  return (
    <section>
      <div className="flex items-center gap-x-2 ">
        <PrismicNextImage
          field={auteur.avatar}
          alt=""
          className="aspect-1 w-10 overflow-hidden rounded-full border border-solid border-black"
        />
        <span>
          {auteur.prenom} {auteur.nom}
        </span>
      </div>
    </section>
  );
};

export default ArticleMetaData;
