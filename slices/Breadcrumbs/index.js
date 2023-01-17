import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BreadcrumbsSlice} BreadcrumbsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BreadcrumbsSlice>} BreadcrumbsProps
 * @param { BreadcrumbsProps }
 */
// const Breadcrumbs = ({ slice }) => <section></section>;

// export default Breadcrumbs;

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

// const pages = [
//   { name: "Projects", href: "#", current: false },
//   { name: "Project Nero", href: "#", current: true },
// ];

const Breadcrumbs = ({ slice }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className=" hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {slice?.items?.map((item, i) => (
          <li key={i}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="ml-2  font-medium hover:text-gray-700">
                <Link href={`${item.relations.url}`}>{item.relation_name}</Link>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
