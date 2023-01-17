import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <section>
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </section>
  );
};

export default Text;
