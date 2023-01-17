// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the article
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Publish Date field in *Article*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Date the article was published
     * - **API ID Path**: article.publishDate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishDate: prismicT.DateField;
    /**
     * Featured Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.featuredImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featuredImage: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Article*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: article.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | ContactFormSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Auteur documents */
interface AuteurDocumentData {
    /**
     * Nom field in *Auteur*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: auteur.nom
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nom: prismicT.KeyTextField;
    /**
     * Prenom field in *Auteur*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: auteur.prenom
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    prenom: prismicT.KeyTextField;
    /**
     * Avatar field in *Auteur*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: auteur.avatar
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    avatar: prismicT.ImageField<never>;
}
/**
 * Auteur document from Prismic
 *
 * - **API ID**: `auteur`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuteurDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AuteurDocumentData>, "auteur", Lang>;
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * Subcategory field in *Category*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: category.subcategory
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    subcategory: prismicT.RelationField<"subcategory">;
    /**
     * Header field in *Category*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.header
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    header: prismicT.RichTextField;
    /**
     * Slice Zone field in *Category*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: category.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<CategoryDocumentDataSlicesSlice>;
}
/**
 * Slice for *Category → Slice Zone*
 *
 */
type CategoryDocumentDataSlicesSlice = TextSlice;
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Collections documents */
interface CollectionsDocumentData {
    /**
     * Name field in *Collections*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: collections.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Articles field in *Collections*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: collections.articles
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    articles: prismicT.RelationField;
}
/**
 * Collections document from Prismic
 *
 * - **API ID**: `collections`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CollectionsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CollectionsDocumentData>, "collections", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Homepage Label field in *Navigation*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Label for the homepage link
     * - **API ID Path**: navigation.homepageLabel
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    homepageLabel: prismicT.TitleField;
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | ContactFormSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Plage documents */
interface PlageGuadeloupeDocumentData {
    /**
     * Header field in *Plage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.header
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    header: prismicT.RichTextField;
    /**
     * Subcategory field in *Plage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.subcategory
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    subcategory: prismicT.RelationField<"subcategory">;
    /**
     * Category field in *Plage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
    /**
     * Ville field in *Plage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.ville
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    ville: prismicT.RelationField<"ville">;
    /**
     * Auteur field in *Plage*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.auteur
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    auteur: prismicT.RelationField<"auteur">;
    /**
     * date_publication field in *Plage*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.date_publication
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    date_publication: prismicT.TimestampField;
    /**
     * Geopoint field in *Plage*
     *
     * - **Field Type**: GeoPoint
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.geopoint
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/geopoint
     *
     */
    geopoint: prismicT.GeoPointField;
    /**
     * Slice Zone field in *Plage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: plage_guadeloupe.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PlageGuadeloupeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Plage → Slice Zone*
 *
 */
type PlageGuadeloupeDocumentDataSlicesSlice = TextSlice | ImageSlice | HeaderSlice | BodySlice | BreadcrumbsSlice | ArticleMetaDataSlice;
/**
 * Plage document from Prismic
 *
 * - **API ID**: `plage_guadeloupe`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PlageGuadeloupeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PlageGuadeloupeDocumentData>, "plage_guadeloupe", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Name field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Name of your blog (e.g. your name)
     * - **API ID Path**: settings.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Short description of your blog
     * - **API ID Path**: settings.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Profile Picture field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.profilePicture
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profilePicture: prismicT.ImageField<never>;
    /**
     * Newsletter Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text above the sign up form
     * - **API ID Path**: settings.newsletterDescription
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDescription: prismicT.RichTextField;
    /**
     * Newsletter Disclaimer field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Small text below sign up form
     * - **API ID Path**: settings.newsletterDisclaimer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDisclaimer: prismicT.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
/** Content for Subcategory documents */
interface SubcategoryDocumentData {
    /**
     * Article field in *Subcategory*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: subcategory.article
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    article: prismicT.RelationField<"plage_guadeloupe">;
    /**
     * Category field in *Subcategory*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: subcategory.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
    /**
     * Header field in *Subcategory*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: subcategory.header
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    header: prismicT.RichTextField;
}
/**
 * Subcategory document from Prismic
 *
 * - **API ID**: `subcategory`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubcategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SubcategoryDocumentData>, "subcategory", Lang>;
/** Content for Ville documents */
interface VilleDocumentData {
    /**
     * Ville field in *Ville*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ville.ville
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    ville: prismicT.KeyTextField;
    /**
     * Articles field in *Ville*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: ville.articles
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    articles: prismicT.RelationField<"plage_guadeloupe">;
}
/**
 * Ville document from Prismic
 *
 * - **API ID**: `ville`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VilleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<VilleDocumentData>, "ville", Lang>;
export type AllDocumentTypes = ArticleDocument | AuteurDocument | CategoryDocument | CollectionsDocument | NavigationDocument | PageDocument | PlageGuadeloupeDocument | SettingsDocument | SubcategoryDocument | VilleDocument;
/**
 * Primary content in ArticleMetaData → Primary
 *
 */
interface ArticleMetaDataSliceDefaultPrimary {
    /**
     * Auteur field in *ArticleMetaData → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: article_meta_data.primary.auteur
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    auteur: prismicT.RelationField<"auteur">;
    /**
     * ArticleDetails field in *ArticleMetaData → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: article_meta_data.primary.articledetails
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    articledetails: prismicT.RelationField<"plage_guadeloupe">;
}
/**
 * Default variation for ArticleMetaData Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ArticleMetaData`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleMetaDataSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticleMetaDataSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ArticleMetaData*
 *
 */
type ArticleMetaDataSliceVariation = ArticleMetaDataSliceDefault;
/**
 * ArticleMetaData Shared Slice
 *
 * - **API ID**: `article_meta_data`
 * - **Description**: `ArticleMetaData`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleMetaDataSlice = prismicT.SharedSlice<"article_meta_data", ArticleMetaDataSliceVariation>;
/**
 * Item in Breadcrumbs → Items
 *
 */
export interface BreadcrumbsSliceDefaultItem {
    /**
     * relations field in *Breadcrumbs → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: breadcrumbs.items[].relations
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    relations: prismicT.RelationField<"category" | "plage_guadeloupe" | "subcategory">;
    /**
     * relation_link field in *Breadcrumbs → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: breadcrumbs.items[].relation_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    relation_link: prismicT.LinkField;
    /**
     * relation name field in *Breadcrumbs → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: breadcrumbs.items[].relation_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    relation_name: prismicT.KeyTextField;
}
/**
 * Default variation for Breadcrumbs Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Breadcrumbs`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BreadcrumbsSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<BreadcrumbsSliceDefaultItem>>;
/**
 * Slice variation for *Breadcrumbs*
 *
 */
type BreadcrumbsSliceVariation = BreadcrumbsSliceDefault;
/**
 * Breadcrumbs Shared Slice
 *
 * - **API ID**: `breadcrumbs`
 * - **Description**: `Breadcrumbs`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BreadcrumbsSlice = prismicT.SharedSlice<"breadcrumbs", BreadcrumbsSliceVariation>;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismicT.SharedSlice<"contact_form", ContactFormSliceVariation>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * Title field in *Header → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: header.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Header → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: header.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWidePrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWide = prismicT.SharedSliceVariation<"wide", Simplify<ImageSliceWidePrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Quote without quotation marks
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.TitleField;
    /**
     * Source field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Source of the quote
     * - **API ID Path**: quote.primary.source
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    source: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in RichText → Primary
 *
 */
interface BodySliceDefaultPrimary {
    /**
     * RichText field in *RichText → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: body.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Body`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BodySliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BodySliceDefaultPrimary>, never>;
/**
 * Slice variation for *RichText*
 *
 */
type BodySliceVariation = BodySliceDefault;
/**
 * RichText Shared Slice
 *
 * - **API ID**: `body`
 * - **Description**: `Body`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BodySlice = prismicT.SharedSlice<"body", BodySliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArticleDocumentData, ArticleDocumentDataSlicesSlice, ArticleDocument, AuteurDocumentData, AuteurDocument, CategoryDocumentData, CategoryDocumentDataSlicesSlice, CategoryDocument, CollectionsDocumentData, CollectionsDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, PlageGuadeloupeDocumentData, PlageGuadeloupeDocumentDataSlicesSlice, PlageGuadeloupeDocument, SettingsDocumentData, SettingsDocument, SubcategoryDocumentData, SubcategoryDocument, VilleDocumentData, VilleDocument, AllDocumentTypes, ArticleMetaDataSliceDefaultPrimary, ArticleMetaDataSliceDefault, ArticleMetaDataSliceVariation, ArticleMetaDataSlice, BreadcrumbsSliceDefaultItem, BreadcrumbsSliceDefault, BreadcrumbsSliceVariation, BreadcrumbsSlice, ContactFormSliceDefault, ContactFormSliceVariation, ContactFormSlice, HeaderSliceDefaultPrimary, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceWidePrimary, ImageSliceWide, ImageSliceVariation, ImageSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, BodySliceDefaultPrimary, BodySliceDefault, BodySliceVariation, BodySlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceVariation, TextSlice };
    }
}
