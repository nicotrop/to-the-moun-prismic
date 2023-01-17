import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BodySlice} BodySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BodySlice>} BodyProps
 * @param { BodyProps }
 */
const Body = ({ slice }) => (
  <section>
    {slice.primary.body ? (
      <PrismicRichText field={slice.primary.body} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </section>
);

export default Body;
