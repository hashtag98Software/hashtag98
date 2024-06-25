import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
	contactData,
	experiencesData,
	experiencesSeo,
	floatingButtonsData,
	roomsSeo,
	rooftopSeo,
	restaurantSeo,
	footerData,
	headerData,
	homeData,
	homeSeo,
	legalData,
	menuData,
	restaurantData,
	rooftopData,
	roomData,
	roomsData,
	roomsSlugs,
	roomSeo,
} from 'graphql/queries'
import { getGqlString } from 'utils/helpers/getGqlString'
import {
	Contact,
	ExperiencesPage,
	FloatingButtons,
	Footer,
	Header,
	Home,
	LegalDataQuery,
	Menu,
	Restaurant,
	Rooftop,
	Room,
	Rooms,
	Seo,
} from 'utils/types/graphql/graphql'

async function fetchGraphQL({
	query,
	preview = false,
	next,
	variables,
}: {
	query: TypedDocumentNode
	variables?: { [key: string]: any }
	preview?: boolean
	next?: NextFetchRequestConfig
}): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query: getGqlString(query), variables }),
			next,
		}
	).then(response => response.json())
}

type GetData = {
	preview?: boolean
	locale: string
}

export const getHomeData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: homeData,
		preview,
		variables: { locale },
	})
	return response.data.homeCollection.items[0] as Home
}

export const getHomeSeo = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: homeSeo,
		preview,
		variables: { locale },
	})
	return response.data.homeCollection.items[0].seo as Seo
}

export const getContactData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: contactData,
		preview,
		variables: { locale },
	})
	return response.data.contactCollection.items[0] as Contact
}

interface GetLegalData extends GetData {
	id: string
}
export const getLegalData = async ({ preview, id, locale }: GetLegalData) => {
	const response = await fetchGraphQL({
		query: legalData,
		preview,
		variables: { id, locale },
	})
	return response.data.legalPage as LegalDataQuery['legalPage']
}

export const getRestaurantData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: restaurantData,
		preview,
		variables: { locale },
	})
	return response.data.restaurantCollection.items[0] as Restaurant
}

export const getRestaurantSeo = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: restaurantSeo,
		preview,
		variables: { locale },
	})
	return response.data.restaurantCollection.items[0].seo as Seo
}

export const getRooftopData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: rooftopData,
		preview,
		variables: { locale },
	})
	return response.data.rooftopCollection.items[0] as Rooftop
}

export const getRooftopSeo = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: rooftopSeo,
		preview,
		variables: { locale },
	})
	return response.data.rooftopCollection.items[0].seo as Seo
}

export const getRoomsSlugs = async () => {
	const response = await fetchGraphQL({ query: roomsSlugs })
	return response.data.roomCollection.items as Room[]
}

export const getRoomData = async ({
	preview,
	locale,
	slug,
}: GetData & { slug: string }) => {
	const response = await fetchGraphQL({
		query: roomData,
		preview,
		variables: { locale, slug },
	})
	return response.data.roomCollection.items[0] as Room
}

export const getRoomSeo = async ({
	preview,
	locale,
	slug,
}: GetData & { slug: string }) => {
	const response = await fetchGraphQL({
		query: roomSeo,
		preview,
		variables: { locale, slug },
	})
	return response.data.roomCollection.items[0].seo as Seo
}

export const getRoomsData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: roomsData,
		preview,
		variables: { locale },
	})

	return response.data.roomsCollection.items[0] as Rooms
}

export const getRoomsSeo = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: roomsSeo,
		preview,
		variables: { locale },
	})
	return response.data.roomsCollection.items[0].seo as Seo
}

export const getExperiencesData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: experiencesData,
		preview,
		variables: { locale },
	})

	return response.data.experiencesPageCollection.items[0] as ExperiencesPage
}

export const getExperiencesSeo = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: experiencesSeo,
		preview,
		variables: { locale },
	})
	return response.data.experiencesPageCollection.items[0].seo as Seo
}

export const getMenuData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: menuData,
		preview,
		variables: { locale },
		next: { tags: ['menu'] },
	})

	return response.data.menuCollection.items[0] as Menu
}

export const getHeaderData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: headerData,
		preview,
		variables: { locale },
		next: { tags: ['header'] },
	})

	return response.data.headerCollection.items[0] as Header
}

export const getFooterData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: footerData,
		preview,
		variables: { locale },
		next: { tags: ['footer'] },
	})

	return response.data.footerCollection.items[0] as Footer
}

export const getFloatingButtonsData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: floatingButtonsData,
		preview,
		variables: { locale },
		next: { tags: ['floatingButtons'] },
	})

	return response.data.floatingButtonsCollection.items[0] as FloatingButtons
}
