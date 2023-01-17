import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section>
      <figure className="aspect-video grid max-h-[550px] grid-cols-1 gap-4 overflow-hidden border-2 border-solid border-red-500">
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </section>
  );
};

export default Image;
