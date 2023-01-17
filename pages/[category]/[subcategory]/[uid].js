import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { Layout } from "../../../components/Layout";
import { Bounded } from "../../../components/Bounded";

const Plages = ({ page, navigation, settings }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
      withProfile={false}
      withHeaderDivider={false}
    >
      {/* <Head>
        <title>
          {prismicH.asText(page.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head> */}
      <Bounded size="base">
        <SliceZone slices={page.data.slices} components={components} />
      </Bounded>
    </Layout>
  );
};

export default Plages;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("plage_guadeloupe", params.uid, {
    fetchLinks: "auteur.nom, auteur.prenom, auteur.avatar",
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  // const auteur = await client.getByUID("auteur", page.data.auteur.uid);

  return {
    props: {
      // auteur,
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("plage_guadeloupe");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
