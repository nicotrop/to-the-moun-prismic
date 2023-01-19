import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
// import { SliceZone } from "@prismicio/react";
// import { components } from "./slices";

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        {/* <title>{prismicH.asText(page.data.title) || ""}</title> */}
        <title>{"SEO title"}</title>
      </Head>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <p>Que faire en Guadeloupe</p>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("category", "que-faire-en-guadeloupe", {});
  const plage = await client.getAllByType("plage_guadeloupe");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  // console.log("page", page);
  // console.log("plage", plage);

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

// export async function getStaticPaths() {
//   const client = createClient();

//   const pages = await client.getAllByType("page");

//   return {
//     paths: pages.map((page) => prismicH.asLink(page)),
//     fallback: false,
//   };
// }
