/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  contactCollection?: Maybe<ContactCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experienceCollection?: Maybe<ExperienceCollection>;
  experiencesPageCollection?: Maybe<ExperiencesPageCollection>;
  hotelPlaceCollection?: Maybe<HotelPlaceCollection>;
  restaurantCollection?: Maybe<RestaurantCollection>;
  rooftopCollection?: Maybe<RooftopCollection>;
  roomCollection?: Maybe<RoomCollection>;
};


export type AssetLinkingCollectionsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsExperiencesPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHotelPlaceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsRestaurantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsRooftopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsRoomCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Página de contacto [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/contact) */
export type Contact = Entry & {
  __typename?: 'Contact';
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContactLinkingCollections>;
  seo?: Maybe<Seo>;
  sys: Sys;
};


/** Página de contacto [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/contact) */
export type ContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Página de contacto [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/contact) */
export type ContactImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Página de contacto [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Página de contacto [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/contact) */
export type ContactSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};

export type ContactCollection = {
  __typename?: 'ContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  video?: Maybe<Asset>;
};


/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type ExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type ExperienceImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type ExperienceNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una experiencia [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experience) */
export type ExperienceVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  experiencesPageCollection?: Maybe<ExperiencesPageCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ExperienceLinkingCollectionsExperiencesPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceLinkingCollectionsExperiencesPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceLinkingCollectionsExperiencesPageCollectionOrder {
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ExperienceOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPage = Entry & {
  __typename?: 'ExperiencesPage';
  contentfulMetadata: ContentfulMetadata;
  experiencesCollection?: Maybe<ExperiencesPageExperiencesCollection>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ExperiencesPageLinkingCollections>;
  seo?: Maybe<Seo>;
  subTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Asset>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageExperiencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperiencesPageExperiencesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageSubTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Página de experiencias [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/experiencesPage) */
export type ExperiencesPageVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperiencesPageCollection = {
  __typename?: 'ExperiencesPageCollection';
  items: Array<Maybe<ExperiencesPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperiencesPageExperiencesCollection = {
  __typename?: 'ExperiencesPageExperiencesCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ExperiencesPageExperiencesCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ExperiencesPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperiencesPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperiencesPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  experiences?: InputMaybe<CfExperienceNestedFilter>;
  experiencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  subTitle_contains?: InputMaybe<Scalars['String']['input']>;
  subTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitle_not?: InputMaybe<Scalars['String']['input']>;
  subTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperiencesPageLinkingCollections = {
  __typename?: 'ExperiencesPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperiencesPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperiencesPageOrder {
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Home Page [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  revalidatePath?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  spacesCollection?: Maybe<HomeSpacesCollection>;
  sys: Sys;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/home) */
export type HomeRevalidatePathArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/home) */
export type HomeSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Home Page [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/home) */
export type HomeSpacesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeSpacesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotelPlaceFilter>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  items: Array<Maybe<Home>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  revalidatePath?: InputMaybe<Scalars['String']['input']>;
  revalidatePath_contains?: InputMaybe<Scalars['String']['input']>;
  revalidatePath_exists?: InputMaybe<Scalars['Boolean']['input']>;
  revalidatePath_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  revalidatePath_not?: InputMaybe<Scalars['String']['input']>;
  revalidatePath_not_contains?: InputMaybe<Scalars['String']['input']>;
  revalidatePath_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  spaces?: InputMaybe<CfHotelPlaceNestedFilter>;
  spacesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HomeOrder {
  RevalidatePathAsc = 'revalidatePath_ASC',
  RevalidatePathDesc = 'revalidatePath_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomeSpacesCollection = {
  __typename?: 'HomeSpacesCollection';
  items: Array<Maybe<HotelPlace>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HomeSpacesCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleBottomAsc = 'titleBottom_ASC',
  TitleBottomDesc = 'titleBottom_DESC',
  TitleTopAsc = 'titleTop_ASC',
  TitleTopDesc = 'titleTop_DESC'
}

/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlace = Entry & {
  __typename?: 'HotelPlace';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HotelPlaceLinkingCollections>;
  sys: Sys;
  titleBottom?: Maybe<Scalars['String']['output']>;
  titleTop?: Maybe<Scalars['String']['output']>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceTitleBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Representa información de un espacio del Hotel (Se usa en el Home) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/hotelPlace) */
export type HotelPlaceTitleTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HotelPlaceCollection = {
  __typename?: 'HotelPlaceCollection';
  items: Array<Maybe<HotelPlace>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HotelPlaceFilter = {
  AND?: InputMaybe<Array<InputMaybe<HotelPlaceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HotelPlaceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titleBottom?: InputMaybe<Scalars['String']['input']>;
  titleBottom_contains?: InputMaybe<Scalars['String']['input']>;
  titleBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleBottom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleBottom_not?: InputMaybe<Scalars['String']['input']>;
  titleBottom_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleBottom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTop?: InputMaybe<Scalars['String']['input']>;
  titleTop_contains?: InputMaybe<Scalars['String']['input']>;
  titleTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleTop_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTop_not?: InputMaybe<Scalars['String']['input']>;
  titleTop_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleTop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HotelPlaceLinkingCollections = {
  __typename?: 'HotelPlaceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type HotelPlaceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HotelPlaceLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotelPlaceLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HotelPlaceLinkingCollectionsHomeCollectionOrder {
  RevalidatePathAsc = 'revalidatePath_ASC',
  RevalidatePathDesc = 'revalidatePath_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HotelPlaceOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleBottomAsc = 'titleBottom_ASC',
  TitleBottomDesc = 'titleBottom_DESC',
  TitleTopAsc = 'titleTop_ASC',
  TitleTopDesc = 'titleTop_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Páginas legales (Políticas de privacidad y tratamiento de datos, Código de conducta hashtag 98 hotel) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/legalPage) */
export type LegalPage = Entry & {
  __typename?: 'LegalPage';
  content?: Maybe<LegalPageContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LegalPageLinkingCollections>;
  seo?: Maybe<Seo>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Páginas legales (Políticas de privacidad y tratamiento de datos, Código de conducta hashtag 98 hotel) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/legalPage) */
export type LegalPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Páginas legales (Políticas de privacidad y tratamiento de datos, Código de conducta hashtag 98 hotel) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/legalPage) */
export type LegalPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Páginas legales (Políticas de privacidad y tratamiento de datos, Código de conducta hashtag 98 hotel) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/legalPage) */
export type LegalPageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Páginas legales (Políticas de privacidad y tratamiento de datos, Código de conducta hashtag 98 hotel) [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/legalPage) */
export type LegalPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LegalPageCollection = {
  __typename?: 'LegalPageCollection';
  items: Array<Maybe<LegalPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LegalPageContent = {
  __typename?: 'LegalPageContent';
  json: Scalars['JSON']['output'];
  links: LegalPageContentLinks;
};

export type LegalPageContentAssets = {
  __typename?: 'LegalPageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LegalPageContentEntries = {
  __typename?: 'LegalPageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LegalPageContentLinks = {
  __typename?: 'LegalPageContentLinks';
  assets: LegalPageContentAssets;
  entries: LegalPageContentEntries;
  resources: LegalPageContentResources;
};

export type LegalPageContentResources = {
  __typename?: 'LegalPageContentResources';
  block: Array<LegalPageContentResourcesBlock>;
  hyperlink: Array<LegalPageContentResourcesHyperlink>;
  inline: Array<LegalPageContentResourcesInline>;
};

export type LegalPageContentResourcesBlock = ResourceLink & {
  __typename?: 'LegalPageContentResourcesBlock';
  sys: ResourceSys;
};

export type LegalPageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'LegalPageContentResourcesHyperlink';
  sys: ResourceSys;
};

export type LegalPageContentResourcesInline = ResourceLink & {
  __typename?: 'LegalPageContentResourcesInline';
  sys: ResourceSys;
};

export type LegalPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPageFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalPageLinkingCollections = {
  __typename?: 'LegalPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LegalPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LegalPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  contact?: Maybe<Contact>;
  contactCollection?: Maybe<ContactCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  experiencesPage?: Maybe<ExperiencesPage>;
  experiencesPageCollection?: Maybe<ExperiencesPageCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  hotelPlace?: Maybe<HotelPlace>;
  hotelPlaceCollection?: Maybe<HotelPlaceCollection>;
  legalPage?: Maybe<LegalPage>;
  legalPageCollection?: Maybe<LegalPageCollection>;
  restaurant?: Maybe<Restaurant>;
  restaurantCollection?: Maybe<RestaurantCollection>;
  rooftop?: Maybe<Rooftop>;
  rooftopCollection?: Maybe<RooftopCollection>;
  room?: Maybe<Room>;
  roomCollection?: Maybe<RoomCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryExperiencesPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperiencesPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperiencesPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperiencesPageFilter>;
};


export type QueryHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeFilter>;
};


export type QueryHotelPlaceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHotelPlaceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotelPlaceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotelPlaceFilter>;
};


export type QueryLegalPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLegalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LegalPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LegalPageFilter>;
};


export type QueryRestaurantArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRestaurantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RestaurantOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantFilter>;
};


export type QueryRooftopArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRooftopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RooftopOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RooftopFilter>;
};


export type QueryRoomArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoomCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RoomOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoomFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type Restaurant = Entry & {
  __typename?: 'Restaurant';
  button1Text?: Maybe<Scalars['String']['output']>;
  button2Text?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  imageDesktop?: Maybe<Asset>;
  imageMobile?: Maybe<Asset>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<RestaurantLinkingCollections>;
  logo?: Maybe<Asset>;
  message?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  subMessage?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text1?: Maybe<Scalars['String']['output']>;
  text2?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Asset>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantButton1TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantButton2TextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantImageDesktopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantImageMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantSubMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantText1Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantText2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de restaurante [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/restaurant) */
export type RestaurantVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantCollection = {
  __typename?: 'RestaurantCollection';
  items: Array<Maybe<Restaurant>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RestaurantFilter = {
  AND?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  button1Text?: InputMaybe<Scalars['String']['input']>;
  button1Text_contains?: InputMaybe<Scalars['String']['input']>;
  button1Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  button1Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  button1Text_not?: InputMaybe<Scalars['String']['input']>;
  button1Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  button1Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  button2Text?: InputMaybe<Scalars['String']['input']>;
  button2Text_contains?: InputMaybe<Scalars['String']['input']>;
  button2Text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  button2Text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  button2Text_not?: InputMaybe<Scalars['String']['input']>;
  button2Text_not_contains?: InputMaybe<Scalars['String']['input']>;
  button2Text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageDesktop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subMessage?: InputMaybe<Scalars['String']['input']>;
  subMessage_contains?: InputMaybe<Scalars['String']['input']>;
  subMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subMessage_not?: InputMaybe<Scalars['String']['input']>;
  subMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  subMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text1?: InputMaybe<Scalars['String']['input']>;
  text1_contains?: InputMaybe<Scalars['String']['input']>;
  text1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text1_not?: InputMaybe<Scalars['String']['input']>;
  text1_not_contains?: InputMaybe<Scalars['String']['input']>;
  text1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2?: InputMaybe<Scalars['String']['input']>;
  text2_contains?: InputMaybe<Scalars['String']['input']>;
  text2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2_not?: InputMaybe<Scalars['String']['input']>;
  text2_not_contains?: InputMaybe<Scalars['String']['input']>;
  text2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestaurantLinkingCollections = {
  __typename?: 'RestaurantLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RestaurantLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RestaurantOrder {
  Button1TextAsc = 'button1Text_ASC',
  Button1TextDesc = 'button1Text_DESC',
  Button2TextAsc = 'button2Text_ASC',
  Button2TextDesc = 'button2Text_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  SubMessageAsc = 'subMessage_ASC',
  SubMessageDesc = 'subMessage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  Text1Asc = 'text1_ASC',
  Text1Desc = 'text1_DESC',
  Text2Asc = 'text2_ASC',
  Text2Desc = 'text2_DESC'
}

/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type Rooftop = Entry & {
  __typename?: 'Rooftop';
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  facebookUsername?: Maybe<Scalars['String']['output']>;
  imagesCollection?: Maybe<AssetCollection>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  instagramUsername?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<RooftopLinkingCollections>;
  logoBlack?: Maybe<Asset>;
  logoHero?: Maybe<Asset>;
  seo?: Maybe<Seo>;
  sys: Sys;
  video?: Maybe<Asset>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopFacebookUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopFacebookUsernameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopInstagramUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopInstagramUsernameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopLogoBlackArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopLogoHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Información de la página de Rooftop [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/rooftop) */
export type RooftopVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RooftopCollection = {
  __typename?: 'RooftopCollection';
  items: Array<Maybe<Rooftop>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RooftopFilter = {
  AND?: InputMaybe<Array<InputMaybe<RooftopFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RooftopFilter>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  facebookUrl_contains?: InputMaybe<Scalars['String']['input']>;
  facebookUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebookUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookUrl_not?: InputMaybe<Scalars['String']['input']>;
  facebookUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebookUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookUsername?: InputMaybe<Scalars['String']['input']>;
  facebookUsername_contains?: InputMaybe<Scalars['String']['input']>;
  facebookUsername_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebookUsername_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookUsername_not?: InputMaybe<Scalars['String']['input']>;
  facebookUsername_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebookUsername_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  instagramUrl_contains?: InputMaybe<Scalars['String']['input']>;
  instagramUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramUrl_not?: InputMaybe<Scalars['String']['input']>;
  instagramUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagramUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  instagramUsername_contains?: InputMaybe<Scalars['String']['input']>;
  instagramUsername_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramUsername_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramUsername_not?: InputMaybe<Scalars['String']['input']>;
  instagramUsername_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagramUsername_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoBlack_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoHero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RooftopLinkingCollections = {
  __typename?: 'RooftopLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RooftopLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RooftopOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  FacebookUsernameAsc = 'facebookUsername_ASC',
  FacebookUsernameDesc = 'facebookUsername_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  InstagramUsernameAsc = 'instagramUsername_ASC',
  InstagramUsernameDesc = 'instagramUsername_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type Room = Entry & {
  __typename?: 'Room';
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<RoomLinkingCollections>;
  m2?: Maybe<Scalars['Int']['output']>;
  mainDescription?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Asset>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomAttributesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomM2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomMainDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Información de una habitación [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/room) */
export type RoomVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoomCollection = {
  __typename?: 'RoomCollection';
  items: Array<Maybe<Room>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RoomFilter = {
  AND?: InputMaybe<Array<InputMaybe<RoomFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RoomFilter>>>;
  attributes_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attributes_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attributes_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attributes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  m2?: InputMaybe<Scalars['Int']['input']>;
  m2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  m2_gt?: InputMaybe<Scalars['Int']['input']>;
  m2_gte?: InputMaybe<Scalars['Int']['input']>;
  m2_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  m2_lt?: InputMaybe<Scalars['Int']['input']>;
  m2_lte?: InputMaybe<Scalars['Int']['input']>;
  m2_not?: InputMaybe<Scalars['Int']['input']>;
  m2_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  mainDescription_contains?: InputMaybe<Scalars['String']['input']>;
  mainDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainDescription_not?: InputMaybe<Scalars['String']['input']>;
  mainDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoomLinkingCollections = {
  __typename?: 'RoomLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RoomLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RoomOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  M2Asc = 'm2_ASC',
  M2Desc = 'm2_DESC',
  MainDescriptionAsc = 'mainDescription_ASC',
  MainDescriptionDesc = 'mainDescription_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Contiene información relaciona con el SEO de una página [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Contiene información relaciona con el SEO de una página [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contiene información relaciona con el SEO de una página [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Contiene información relaciona con el SEO de una página [See type definition](https://app.contentful.com/spaces/9q4if916fz49/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  contactCollection?: Maybe<ContactCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experiencesPageCollection?: Maybe<ExperiencesPageCollection>;
  homeCollection?: Maybe<HomeCollection>;
  legalPageCollection?: Maybe<LegalPageCollection>;
  restaurantCollection?: Maybe<RestaurantCollection>;
  rooftopCollection?: Maybe<RooftopCollection>;
  roomCollection?: Maybe<RoomCollection>;
};


export type SeoLinkingCollectionsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsExperiencesPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsExperiencesPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsLegalPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsLegalPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsRestaurantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsRestaurantCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsRooftopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsRooftopCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsRoomCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsRoomCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoLinkingCollectionsContactCollectionOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsExperiencesPageCollectionOrder {
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsHomeCollectionOrder {
  RevalidatePathAsc = 'revalidatePath_ASC',
  RevalidatePathDesc = 'revalidatePath_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsLegalPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsRestaurantCollectionOrder {
  Button1TextAsc = 'button1Text_ASC',
  Button1TextDesc = 'button1Text_DESC',
  Button2TextAsc = 'button2Text_ASC',
  Button2TextDesc = 'button2Text_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  SubMessageAsc = 'subMessage_ASC',
  SubMessageDesc = 'subMessage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  Text1Asc = 'text1_ASC',
  Text1Desc = 'text1_DESC',
  Text2Asc = 'text2_ASC',
  Text2Desc = 'text2_DESC'
}

export enum SeoLinkingCollectionsRooftopCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  FacebookUsernameAsc = 'facebookUsername_ASC',
  FacebookUsernameDesc = 'facebookUsername_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  InstagramUsernameAsc = 'instagramUsername_ASC',
  InstagramUsernameDesc = 'instagramUsername_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsRoomCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  M2Asc = 'm2_ASC',
  M2Desc = 'm2_DESC',
  MainDescriptionAsc = 'mainDescription_ASC',
  MainDescriptionDesc = 'mainDescription_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfExperienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfHotelPlaceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHotelPlaceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHotelPlaceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titleBottom?: InputMaybe<Scalars['String']['input']>;
  titleBottom_contains?: InputMaybe<Scalars['String']['input']>;
  titleBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleBottom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleBottom_not?: InputMaybe<Scalars['String']['input']>;
  titleBottom_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleBottom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTop?: InputMaybe<Scalars['String']['input']>;
  titleTop_contains?: InputMaybe<Scalars['String']['input']>;
  titleTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleTop_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleTop_not?: InputMaybe<Scalars['String']['input']>;
  titleTop_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleTop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type HomeDataQuery = { __typename?: 'Query', homeCollection?: { __typename?: 'HomeCollection', items: Array<{ __typename?: 'Home', seo?: { __typename?: 'Seo', title?: string | null, description?: string | null } | null, spacesCollection?: { __typename?: 'HomeSpacesCollection', items: Array<{ __typename?: 'HotelPlace', titleTop?: string | null, titleBottom?: string | null, description?: string | null, link?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null } | null> } | null };

export type ContactDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ContactDataQuery = { __typename?: 'Query', contactCollection?: { __typename?: 'ContactCollection', items: Array<{ __typename?: 'Contact', email?: string | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null } | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type LegalDataQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type LegalDataQuery = { __typename?: 'Query', legalPage?: { __typename?: 'LegalPage', title?: string | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null } | null, content?: { __typename?: 'LegalPageContent', json: any } | null } | null };

export type RestaurantDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type RestaurantDataQuery = { __typename?: 'Query', restaurantCollection?: { __typename?: 'RestaurantCollection', items: Array<{ __typename?: 'Restaurant', message?: string | null, subMessage?: string | null, button1Text?: string | null, button2Text?: string | null, text1?: string | null, text2?: string | null, logo?: { __typename?: 'Asset', url?: string | null } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null } | null, video?: { __typename?: 'Asset', url?: string | null } | null, imageDesktop?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, imageMobile?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null> } | null } | null> } | null };

export type RooftopDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type RooftopDataQuery = { __typename?: 'Query', rooftopCollection?: { __typename?: 'RooftopCollection', items: Array<{ __typename?: 'Rooftop', buttonText?: string | null, instagramUsername?: string | null, instagramUrl?: string | null, facebookUsername?: string | null, facebookUrl?: string | null, video?: { __typename?: 'Asset', url?: string | null } | null, logoHero?: { __typename?: 'Asset', url?: string | null } | null, logoBlack?: { __typename?: 'Asset', url?: string | null } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null> } | null };

export type RoomsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type RoomsSlugsQuery = { __typename?: 'Query', roomCollection?: { __typename?: 'RoomCollection', items: Array<{ __typename?: 'Room', slug?: string | null } | null> } | null };

export type RoomDataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type RoomDataQuery = { __typename?: 'Query', roomCollection?: { __typename?: 'RoomCollection', items: Array<{ __typename?: 'Room', type?: string | null, mainDescription?: string | null, description?: string | null, m2?: number | null, attributes?: Array<string | null> | null, video?: { __typename?: 'Asset', url?: string | null } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null> } | null } | null> } | null };


export const HomeDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"spacesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleTop"}},{"kind":"Field","name":{"kind":"Name","value":"titleBottom"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomeDataQuery, HomeDataQueryVariables>;
export const ContactDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContactData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<ContactDataQuery, ContactDataQueryVariables>;
export const LegalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LegalData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]} as unknown as DocumentNode<LegalDataQuery, LegalDataQueryVariables>;
export const RestaurantDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RestaurantData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restaurantCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"subMessage"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button1Text"}},{"kind":"Field","name":{"kind":"Name","value":"button2Text"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"text1"}},{"kind":"Field","name":{"kind":"Name","value":"text2"}}]}}]}}]}}]} as unknown as DocumentNode<RestaurantDataQuery, RestaurantDataQueryVariables>;
export const RooftopDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RooftopData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooftopCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoHero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoBlack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instagramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"instagramUrl"}},{"kind":"Field","name":{"kind":"Name","value":"facebookUsername"}},{"kind":"Field","name":{"kind":"Name","value":"facebookUrl"}}]}}]}}]}}]} as unknown as DocumentNode<RooftopDataQuery, RooftopDataQueryVariables>;
export const RoomsSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RoomsSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roomCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<RoomsSlugsQuery, RoomsSlugsQueryVariables>;
export const RoomDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RoomData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roomCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mainDescription"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"m2"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RoomDataQuery, RoomDataQueryVariables>;